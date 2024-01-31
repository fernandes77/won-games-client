export const prefixAll = (prefix: string, classNames: string) => {
  const listWithPrefix = classNames
    .split(' ')
    .map((className) => `${prefix}:${className}`)

  return listWithPrefix.join(' ')
}
