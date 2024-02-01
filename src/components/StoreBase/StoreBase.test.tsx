import { render, screen } from '@/utils/tests/helpers'
import { StoreBase } from './StoreBase'

jest.mock('@/components/Menu/Menu', () => {
  return {
    Menu: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('@/components/Footer/Footer', () => {
  return {
    Footer: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<StoreBase />', () => {
  it('should render menu, footer and children', () => {
    render(
      <StoreBase>
        <h1>Heading</h1>
      </StoreBase>
    )

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
