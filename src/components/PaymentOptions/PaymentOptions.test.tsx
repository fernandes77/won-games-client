import { render, screen, user, waitFor } from '@/utils/tests/helpers'
import { PaymentOptions } from './PaymentOptions'
import cards from './PaymentOptions.mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    await user.click(screen.getByLabelText(/4325/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions cards={cards} handlePayment={handlePayment} />)

    await user.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions cards={cards} handlePayment={handlePayment} />)

    await user.click(screen.getByLabelText(/4325/))
    await user.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
