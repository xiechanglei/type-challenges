type Unshift<K extends any[], S> = [S, ...K]

type Result = Unshift<[1, 2], 0>
export { }
