import type { Meta, StoryObj } from '@storybook/react'
import { GameInfo } from './GameInfo'

const meta: Meta<typeof GameInfo> = {
  component: GameInfo
}

export default meta
type Story = StoryObj<typeof GameInfo>

export const Primary: Story = {
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '90rem', margin: 'auto', padding: '1.5rem' }}>
        <Story />
      </div>
    )
  ]
}
