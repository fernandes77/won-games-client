import { render, screen } from '@/utils/tests/helpers'
import { Heading } from './Heading'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-white'
    )
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-black'
    )
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'pl-2 border-l-[7px]'
    )
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByTestId('heading-line-bottom')).toBeInTheDocument()
  })

  it('should render a heading with a small size', () => {
    render(<Heading size="sm">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-md'
    )
  })

  it('should render a Heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveClass(
      `border-l-[7px] border-primary`
    )
    expect(screen.getByTestId('heading-line-bottom')).toHaveClass(
      'border-b-[5px] border-primary'
    )
  })

  it('should render a Heading with a secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveClass(
      `border-l-[7px] border-secondary`
    )
    expect(screen.getByTestId('heading-line-bottom')).toHaveClass(
      'border-b-[5px] border-secondary'
    )
  })
})
