import cardsMock from '@/components/PaymentOptions/PaymentOptions.mock'
import { render, screen } from '@/utils/tests/helpers'
import { CardsList } from './CardsList'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    render(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
