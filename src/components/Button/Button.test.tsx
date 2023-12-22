import { renderWithTheme } from '@/utils/tests/helpers'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import { screen } from '@testing-library/react'
import { Button, buttonSizesMap } from './Button'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      buttonSizesMap.md
    )
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="sm">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      buttonSizesMap.sm
    )
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="lg">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      buttonSizesMap.lg
    )
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'w-full'
    )
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<IconShoppingCartPlus data-testid="icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
