import { Children } from '@/types/children'
import { ClassName } from '@/types/class-name'
import { cn } from '@/utils/merge-classnames'

export const Container = ({
  children,
  className,
  as = 'div'
}: Children & ClassName & { as?: 'div' | 'section' }) => {
  const props = {
    className: cn('w-full max-w-container mx-auto px-half-gutter', className)
  }

  if (as === 'section') return <section {...props}>{children}</section>

  return <div {...props}>{children}</div>
}
