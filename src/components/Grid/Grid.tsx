import { Children } from '@/types/children'

export const Grid = ({ children }: Children) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(15.625rem,1fr))] gap-md my-md">
    {children}
  </div>
)
