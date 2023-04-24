import type { Equal, Expect, NotAny } from '@type-challenges/utils'
/**
 * challenge block
 */
type HelloWorld = string

type test = [
    Expect<Equal<HelloWorld, string>>,
    Expect<NotAny<HelloWorld>>,
]


/**
 * typescript里面的定义类型有type与interface两种方式
 * 二者在语法上有一些区别
 * 1.二者都可以用来描述对象或者函数,
 * 2.二者都支持扩展  &  extends
 * 3.interface 可以extends type进行扩展，type可以 & interface进行扩展
 * 4.二者都可以被implements关键字进行使用
 * 5.type可以为基本类型，联合类型或者元组类型定义别名，而接口没有此语法功能
 * 6.同名接口会自动合并，而类型type不行
 */
type MyData = { name: string, age: number }
interface MyDataI {
    name: string,
    age: number
}
type MyFun = (name: string) => void
interface MyFunI {
    (name: string): void
}

type MyString = string
type MyCompute = string | number

export { test }