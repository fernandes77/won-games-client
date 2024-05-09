import type { Meta, StoryObj } from '@storybook/react'
import { GameCard } from './GameCard'

const meta: Meta<typeof GameCard> = {
  title: 'Game/Card',
  component: GameCard
}

export default meta
type Story = StoryObj<typeof GameCard>

const commonArgs = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235,
  promotionalPrice: 215
}

const commonArgTypes = {
  onFav: { action: 'clicked' },
  ribbon: { type: 'string' }
} as const

export const Primary: Story = {
  args: commonArgs,
  argTypes: commonArgTypes,
  decorators: [
    (Story) => (
      <div style={{ width: '30rem' }}>
        <Story />
      </div>
    )
  ]
}

export const WithRibbon: Story = {
  args: {
    ...commonArgs,
    ribbon: '20% OFF',
    ribbonSize: 'sm',
    ribbonColor: 'primary'
  },
  argTypes: commonArgTypes,
  decorators: [
    (Story) => (
      <div style={{ width: '30rem' }}>
        <Story />
      </div>
    )
  ]
}
