export const selectChildren = (selector: string, classes: string) => {
  const twPrefix = `[&_${selector}]:`
  const classListWithPrefix = classes
    .split(' ')
    .map((className) => `${twPrefix}${className}`)

  return classListWithPrefix.join(' ')
}
