import { render, screen } from '@/utils/tests/helpers'
import { Ribbon, ribbonSizeMap } from './Ribbon'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass('bg-primary')
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass('bg-secondary')
  })

  it('should render with the normal size as default', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass(ribbonSizeMap.md)
  })

  it('should render with the small size', () => {
    render(<Ribbon size="sm">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass(ribbonSizeMap.sm)
  })
})
