import initWasm, {
  clear_canvas,
  count_set_bits,
  generate_initial_puzzle_mask,
  is_canvas_black,
  select_random_subset,
  xor_buffers
} from '../crate/pkg/imagenim_crate.js';

let isInitialized = false;

export async function initWasmEngine() {
  if (!isInitialized) {
    await initWasm();
    isInitialized = true;
  }
}

export {
  clear_canvas,
  count_set_bits,
  generate_initial_puzzle_mask,
  is_canvas_black,
  select_random_subset,
  xor_buffers
};
