import { render, screen } from '@/utils/tests/helpers'
import { GameDetails } from './GameDetails'
import game from './GameDetails.mock'

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...game} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    render(<GameDetails {...game} />)

    expect(screen.getByLabelText(/windows/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mac/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linux/i)).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...game} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    render(<GameDetails {...game} />)

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    render(<GameDetails {...game} />)

    expect(screen.getByText(/walkabout/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...game} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<GameDetails {...game} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...game} />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
