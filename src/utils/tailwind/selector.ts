import { prefixAll } from '@/utils/tailwind/prefix-all'

export const selectChildren = (selector: string, classNames: string) => {
  const prefix = `[&_${selector}]`
  return prefixAll(prefix, classNames)
}
