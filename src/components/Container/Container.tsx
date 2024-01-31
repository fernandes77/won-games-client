import { Children } from '@/types/children'

export const Container = ({ children }: Children) => (
  <div className="max-w-container mx-auto px-half-gutter">{children}</div>
)
