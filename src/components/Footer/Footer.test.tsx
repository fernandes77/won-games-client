import { Footer } from '@/components/Footer/Footer'
import { render } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
