export interface LoadedImageData {
  url: string;
  width: number;
  height: number;
  buffer: Uint8Array;
}

export async function loadImageAsBuffer(
  url: string,
  targetWidth: number,
  targetHeight: number
): Promise<LoadedImageData> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      // Double requestAnimationFrame ensures SVG rendering engine has finished rasterizing
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) {
              reject(new Error('Failed to get 2d canvas context'));
              return;
            }

            // Fill black background first
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, targetWidth, targetHeight);

            // Draw image scaled to fit target dimensions
            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

            // Get ImageData and copy bytes
            const imgData = ctx.getImageData(0, 0, targetWidth, targetHeight);
            const buffer = new Uint8Array(imgData.data);

            resolve({
              url,
              width: targetWidth,
              height: targetHeight,
              buffer
            });
          } catch (e) {
            reject(e);
          }
        });
      });
    };

    img.onerror = (err) => reject(err);
    img.src = url;
  });
}
