import { renderWithTheme, resizeScreenSize } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'
import { Logo, logoSizeClassesMap } from './Logo'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-white'
    )
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-black'
    )
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      logoSizeClassesMap.normal
    )
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      logoSizeClassesMap.large
    )
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    resizeScreenSize(400)
    renderWithTheme(<Logo hideTextOnMobile />)
    expect(screen.getByTestId('logo-text')).toHaveClass('hidden')
  })
})
