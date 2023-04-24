type If<S extends boolean, L, R> = S extends true ? L : R

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

export { }