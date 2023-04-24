interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyExclude<T, P> = T extends P ? never : T

type MyOmit<T, P extends keyof T> = { [K in MyExclude<keyof T, P>]: T[K] }

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}
export { }