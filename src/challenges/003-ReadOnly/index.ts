import type { Equal, Expect } from '@type-challenges/utils'
interface Todo {
  title: string
  description: string
}
type MyReadonly<K> = {
  readonly [P in keyof K]: K[P]
}

type cases = [
  Expect<Equal<MyReadonly<Todo>, Readonly<Todo>>>,
]

// const todo: MyReadonly<Todo> = {
//   title: "Hey",
//   description: "foobar"
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property

export { }