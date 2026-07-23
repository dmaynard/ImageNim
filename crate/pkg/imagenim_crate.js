/* @ts-self-types="./imagenim_crate.d.ts" */

/**
 * Clears an RGBA pixel buffer to opaque black (0, 0, 0, 255).
 * @param {Uint8Array} target
 */
export function clear_canvas(target) {
    var ptr0 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.clear_canvas(ptr0, len0, target);
}

/**
 * Counts the number of set bits (1s) in a bitmask.
 * Used to calculate perfect score.
 * @param {number} bitmask
 * @returns {number}
 */
export function count_set_bits(bitmask) {
    const ret = wasm.count_set_bits(bitmask);
    return ret >>> 0;
}

/**
 * Generate random bitmask for initial game puzzle.
 * Selects between `min_set` and `max_set` pictures out of `num_pictures`.
 * @param {number} num_pictures
 * @param {number} min_set
 * @param {number} max_set
 * @param {bigint} seed
 * @returns {number}
 */
export function generate_initial_puzzle_mask(num_pictures, min_set, max_set, seed) {
    const ret = wasm.generate_initial_puzzle_mask(num_pictures, min_set, max_set, seed);
    return ret >>> 0;
}

/**
 * Checks if an RGBA canvas is completely black (all RGB bytes are 0).
 * @param {Uint8Array} target
 * @returns {boolean}
 */
export function is_canvas_black(target) {
    const ptr0 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.is_canvas_black(ptr0, len0);
    return ret !== 0;
}

/**
 * Select `num_to_select` items out of `total_count` using Knuth's algorithm.
 * Returns a byte array (1 for selected, 0 for excluded).
 * @param {number} num_to_select
 * @param {number} total_count
 * @param {bigint} seed
 * @returns {Uint8Array}
 */
export function select_random_subset(num_to_select, total_count, seed) {
    const ret = wasm.select_random_subset(num_to_select, total_count, seed);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * XOR two RGBA pixel buffers.
 * `target` and `src` must be RGBA (4 bytes per pixel) of the same length.
 * R, G, B components are XORed, Alpha is set to 255 (opaque).
 * @param {Uint8Array} target
 * @param {Uint8Array} src
 */
export function xor_buffers(target, src) {
    var ptr0 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(src, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    wasm.xor_buffers(ptr0, len0, target, ptr1, len1);
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_copy_to_typed_array_4db0cbe2cc60dbee: function(arg0, arg1, arg2) {
            new Uint8Array(arg2.buffer, arg2.byteOffset, arg2.byteLength).set(getArrayU8FromWasm0(arg0, arg1));
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./imagenim_crate_bg.js": import0,
    };
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('imagenim_crate_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
