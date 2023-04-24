const test = (age: number, name: string) => { }

type MyParameters<K extends (...args: any) => any> = K extends (...args: infer P) => any ? P : never
type Params1 = Parameters<typeof test>
type Params2 = MyParameters<typeof test>

export { }