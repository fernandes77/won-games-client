import type { Meta, StoryObj } from '@storybook/react'
import { GameDetails } from './GameDetails'
import game from './GameDetails.mock'

const meta: Meta<typeof GameDetails> = {
  component: GameDetails
}

export default meta
type Story = StoryObj<typeof GameDetails>

export const Primary: Story = {
  args: game,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '81.25rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
