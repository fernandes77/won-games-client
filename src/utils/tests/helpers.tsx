import { RenderResult, render } from '@testing-library/react'
import mediaQuery from 'css-mediaquery'

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(<>{children}</>)
}

function createMatchMedia(width: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    }
  }
}

export function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width)
}
