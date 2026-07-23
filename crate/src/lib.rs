use wasm_bindgen::prelude::*;

/// XOR two RGBA pixel buffers.
/// `target` and `src` must be RGBA (4 bytes per pixel) of the same length.
/// R, G, B components are XORed, Alpha is set to 255 (opaque).
#[wasm_bindgen]
pub fn xor_buffers(target: &mut [u8], src: &[u8]) {
    let len = target.len().min(src.len());
    let mut i = 0;
    while i + 3 < len {
        target[i] ^= src[i];         // Red
        target[i + 1] ^= src[i + 1]; // Green
        target[i + 2] ^= src[i + 2]; // Blue
        target[i + 3] = 255;          // Opaque Alpha
        i += 4;
    }
}

/// Clears an RGBA pixel buffer to opaque black (0, 0, 0, 255).
#[wasm_bindgen]
pub fn clear_canvas(target: &mut [u8]) {
    let len = target.len();
    let mut i = 0;
    while i + 3 < len {
        target[i] = 0;     // Red
        target[i + 1] = 0; // Green
        target[i + 2] = 0; // Blue
        target[i + 3] = 255; // Alpha
        i += 4;
    }
}

/// Counts the number of set bits (1s) in a bitmask.
/// Used to calculate perfect score.
#[wasm_bindgen]
pub fn count_set_bits(bitmask: u32) -> u32 {
    bitmask.count_ones()
}

/// Checks if an RGBA canvas is completely black (all RGB bytes are 0).
#[wasm_bindgen]
pub fn is_canvas_black(target: &[u8]) -> bool {
    let mut i = 0;
    let len = target.len();
    while i + 3 < len {
        if target[i] != 0 || target[i + 1] != 0 || target[i + 2] != 0 {
            return false;
        }
        i += 4;
    }
    true
}

/// Simple LCG random number generator for WASM environment
struct Lcg {
    state: u64,
}

impl Lcg {
    fn new(seed: u64) -> Self {
        Self { state: seed }
    }

    fn next_float(&mut self) -> f32 {
        self.state = self.state.wrapping_mul(6364136223846793005).wrapping_add(1442695040888963407);
        ((self.state >> 32) as u32) as f32 / (u32::MAX as f32)
    }

    fn next_u32(&mut self) -> u32 {
        self.state = self.state.wrapping_mul(6364136223846793005).wrapping_add(1442695040888963407);
        (self.state >> 32) as u32
    }
}

/// Select `num_to_select` items out of `total_count` using Knuth's algorithm.
/// Returns a byte array (1 for selected, 0 for excluded).
#[wasm_bindgen]
pub fn select_random_subset(num_to_select: usize, total_count: usize, seed: u64) -> Vec<u8> {
    let mut rng = Lcg::new(if seed == 0 { 123456789 } else { seed });
    let mut selected = vec![0u8; total_count];
    let mut remaining_to_select = num_to_select.min(total_count);
    let mut remaining_to_test = total_count;

    for i in 0..total_count {
        if remaining_to_select == 0 {
            break;
        }
        let prob = (remaining_to_select as f32) / (remaining_to_test as f32);
        remaining_to_test -= 1;
        if rng.next_float() <= prob {
            selected[i] = 1;
            remaining_to_select -= 1;
        }
    }

    selected
}

/// Generate random bitmask for initial game puzzle.
/// Selects between `min_set` and `max_set` pictures out of `num_pictures`.
#[wasm_bindgen]
pub fn generate_initial_puzzle_mask(num_pictures: usize, min_set: usize, max_set: usize, seed: u64) -> u32 {
    let mut rng = Lcg::new(if seed == 0 { 987654321 } else { seed });
    let count = min_set + (rng.next_u32() as usize % (max_set - min_set + 1));
    let subset = select_random_subset(count, num_pictures, seed);
    let mut mask: u32 = 0;
    for (i, &picked) in subset.iter().enumerate() {
        if picked == 1 {
            mask |= 1 << i;
        }
    }
    mask
}
