import { render, screen } from '@/utils/tests/helpers'
import { resizeScreenSize } from '@/utils/tests/resize-screen-size'
import { Logo, logoSizeClassesMap } from './Logo'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-white'
    )
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-black'
    )
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      logoSizeClassesMap.normal
    )
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      logoSizeClassesMap.large
    )
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    resizeScreenSize(400)
    render(<Logo hideTextOnMobile />)
    expect(screen.getByTestId('logo-text')).toHaveClass('max-md:hidden')
  })
})
