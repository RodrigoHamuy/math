/** Recursively makes properties and elements of plain objects, arrays, and tuples read-only. */
export type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };
