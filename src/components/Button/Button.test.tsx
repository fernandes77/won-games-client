import { render, screen } from '@/utils/tests/helpers'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import { Button, buttonSizesMap } from './Button'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      buttonSizesMap.md
    )
  })

  it('should render the small size', () => {
    render(<Button size="sm">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      buttonSizesMap.sm
    )
  })

  it('should render the large size', () => {
    render(<Button size="lg">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      buttonSizesMap.lg
    )
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'w-full'
    )
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<IconShoppingCartPlus data-testid="icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
