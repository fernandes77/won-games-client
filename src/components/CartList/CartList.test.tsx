import { render, screen } from '@/utils/tests/helpers'
import { CartList } from './CartList'
import mockItems from './CartList.mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(
      <CartList items={mockItems} total="R$ 430,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 430,00')).toHaveClass('text-primary')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList items={mockItems} total="R$ 430,00" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })
})
