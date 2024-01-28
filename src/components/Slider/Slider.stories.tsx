import type { Meta, StoryObj } from '@storybook/react'
import { Settings } from 'react-slick'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  component: Slider
}

export default meta
type Story = StoryObj<typeof Slider>

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const slideStyles = {
  background: 'gray',
  width: '30rem',
  padding: '10rem 0',
  border: '0.1rem solid red',
  color: 'white',
  textAlign: 'center' as const
}

export const Horizontal: Story = {
  decorators: [
    () => (
      <Slider settings={settings}>
        <div style={slideStyles}>1</div>
        <div style={slideStyles}>2</div>
        <div style={slideStyles}>3</div>
        <div style={slideStyles}>4</div>
        <div style={slideStyles}>5</div>
        <div style={slideStyles}>6</div>
      </Slider>
    )
  ]
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story = {
  decorators: [
    () => (
      <Slider settings={verticalSettings}>
        <div style={slideStyles}>1</div>
        <div style={slideStyles}>2</div>
        <div style={slideStyles}>3</div>
        <div style={slideStyles}>4</div>
        <div style={slideStyles}>5</div>
        <div style={slideStyles}>6</div>
      </Slider>
    )
  ]
}
