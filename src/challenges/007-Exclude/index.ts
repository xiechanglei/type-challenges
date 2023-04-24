export { }
type Person = {
    name: string,
    age: number,
}

type Teacher = {
    name: string,
    age: number,
    grade: string
}

type MyExclude<T, U> = T extends U ? never : T

type ExcludePersonFromTeacher = MyExclude<Teacher, Person>

type test1 = MyExclude<"animal" | "dog", "animal">