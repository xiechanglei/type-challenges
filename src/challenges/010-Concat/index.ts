type Concat<K extends any[], S extends any[]> = [...K, ...S]
type Result = Concat<[1, 2], [2]>
export { }