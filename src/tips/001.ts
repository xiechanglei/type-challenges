const data = {
    apple: 10,
    banana: 20,
    orange: 30
}

type DataType = typeof data

type Cme = {
    [key in keyof DataType]: {
        [key2 in key]: DataType[key2]
    }
}[keyof DataType]

export { }