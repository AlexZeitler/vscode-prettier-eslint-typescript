type SimpleType = string | number | boolean

interface SimpleConstructor<T extends SimpleType> {
  (value: any): T
}

export function getEnv<T extends SimpleType>(
  name: string,
  cast: SimpleConstructor<T>
): T {
  return cast(process.env[name])
}
