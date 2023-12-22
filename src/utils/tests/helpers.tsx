import { RenderOptions, render } from '@testing-library/react'
import React, { ReactElement } from 'react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const view = render(ui, { wrapper: AllTheProviders, ...options })

  return view
}

export * from '@testing-library/react'
export { customRender as render }
