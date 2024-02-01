import { Children } from '@/types/children'
import { RenderOptions, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'

const AllTheProviders = ({ children }: Children) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const view = render(ui, { wrapper: AllTheProviders, ...options })

  return view
}

const user = userEvent.setup()

export * from '@testing-library/react'
export { customRender as render, user }
