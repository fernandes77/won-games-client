import { FormSignIn } from '@/components/FormSignIn/FormSignIn'
import { render, screen } from '@/utils/tests/helpers'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /create one/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument()
  })
})
