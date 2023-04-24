const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never

type Rt = MyReturnType<typeof fn> // 应推导出 "1 | 2"
export { }

//infer case
type A<T> = T extends [first: infer U, ...others: any] ? U : never
type B<T> = T extends (infer U)[] ? U : never
type C<T> = T extends (...args: infer U) => void ? U : never
type D<T> = T extends (...args: any) => infer U ? U : never
type E<T> = T extends Promise<infer U> ? U : never
