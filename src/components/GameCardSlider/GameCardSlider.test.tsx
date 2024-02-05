import { render, screen } from '@/utils/tests/helpers'
import { GameCardSlider } from './GameCardSlider'
import items from './GameCardSlider.mock'

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    render(<GameCardSlider items={items} />)
    expect(screen.queryAllByTestId('game-card-slide')).toHaveLength(6)
  })
})
