import games from '@/components/GameCardSlider/GameCardSlider.mock'
import highlight from '@/components/Highlight/Highlight.mock'
import { render, screen } from '@/utils/tests/helpers'
import 'match-media-mock'
import { Showcase } from './Showcase'

const props = {
  title: 'Most Popular',
  highlight,
  games: games.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    render(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlight.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<Showcase games={props.games} highlight={props.highlight} />)

    screen.getByRole('heading', { name: highlight.title })
    screen.getByRole('heading', { name: games[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    render(<Showcase title={props.title} games={props.games} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: games[0].title })

    expect(
      screen.queryByRole('heading', { name: highlight.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    render(<Showcase title={props.title} highlight={props.highlight} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlight.title })

    expect(
      screen.queryByRole('heading', { name: games[0].title })
    ).not.toBeInTheDocument()
  })
})
