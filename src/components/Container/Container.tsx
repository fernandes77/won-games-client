import { Children } from '@/types/children'
import { twMerge } from 'tailwind-merge'

export const Container = ({
  children,
  className,
  as = 'div'
}: Children & { as?: 'div' | 'section'; className?: string }) => {
  const props = {
    className: twMerge(
      'w-full max-w-container mx-auto px-half-gutter',
      className
    )
  }

  if (as === 'section') return <section {...props}>{children}</section>

  return <div {...props}>{children}</div>
}
