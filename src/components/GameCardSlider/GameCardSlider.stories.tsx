import type { Meta, StoryObj } from '@storybook/react'
import { GameCardSlider } from './GameCardSlider'
import items from './GameCardSlider.mock'

const meta: Meta<typeof GameCardSlider> = {
  component: GameCardSlider
}

export default meta
type Story = StoryObj<typeof GameCardSlider>

export const Primary: Story = {
  args: { items },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
