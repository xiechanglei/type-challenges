
type Expand<K extends any[]> = K[number]
type expand = Expand<['Kars', 'Esidisi', 'Wamuu', 'Santana']>


type Includes<K extends any[], T> = T extends K[number] ? true : false
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isCar = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // expected to be `false`

export { }