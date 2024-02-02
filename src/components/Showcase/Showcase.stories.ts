import games from '@/components/GameCardSlider/GameCardSlider.mock'
import highlight from '@/components/Highlight/Highlight.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { Showcase } from './Showcase'

const meta: Meta<typeof Showcase> = {
  component: Showcase
}

export default meta
type Story = StoryObj<typeof Showcase>

export const Primary: Story = {
  args: { title: 'A Showcase of games', games, highlight }
}
