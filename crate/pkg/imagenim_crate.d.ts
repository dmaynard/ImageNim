/* tslint:disable */
/* eslint-disable */

/**
 * Clears an RGBA pixel buffer to opaque black (0, 0, 0, 255).
 */
export function clear_canvas(target: Uint8Array): void;

/**
 * Counts the number of set bits (1s) in a bitmask.
 * Used to calculate perfect score.
 */
export function count_set_bits(bitmask: number): number;

/**
 * Generate random bitmask for initial game puzzle.
 * Selects between `min_set` and `max_set` pictures out of `num_pictures`.
 */
export function generate_initial_puzzle_mask(num_pictures: number, min_set: number, max_set: number, seed: bigint): number;

/**
 * Checks if an RGBA canvas is completely black (all RGB bytes are 0).
 */
export function is_canvas_black(target: Uint8Array): boolean;

/**
 * Select `num_to_select` items out of `total_count` using Knuth's algorithm.
 * Returns a byte array (1 for selected, 0 for excluded).
 */
export function select_random_subset(num_to_select: number, total_count: number, seed: bigint): Uint8Array;

/**
 * XOR two RGBA pixel buffers.
 * `target` and `src` must be RGBA (4 bytes per pixel) of the same length.
 * R, G, B components are XORed, Alpha is set to 255 (opaque).
 */
export function xor_buffers(target: Uint8Array, src: Uint8Array): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly xor_buffers: (a: number, b: number, c: any, d: number, e: number) => void;
    readonly clear_canvas: (a: number, b: number, c: any) => void;
    readonly count_set_bits: (a: number) => number;
    readonly is_canvas_black: (a: number, b: number) => number;
    readonly select_random_subset: (a: number, b: number, c: bigint) => [number, number];
    readonly generate_initial_puzzle_mask: (a: number, b: number, c: number, d: bigint) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
