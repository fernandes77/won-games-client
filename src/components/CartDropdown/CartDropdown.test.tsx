import items from '@/components/CartList/CartList.mock'
import { render, screen, user } from '@/utils/tests/helpers'
import { CartDropdown } from './CartDropdown'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    render(<CartDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', async () => {
    render(<CartDropdown items={items} total="R$ 300,00" />)

    await user.click(screen.getByRole('button'))

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
