type Push<K extends any[], S> = [...K, S]

type Result = Push<[1, 2], '3'>
export { }
