import type { Meta, StoryObj } from '@storybook/react'
import { GameInfo } from './GameInfo'
import game from './GameInfo.mock'

const meta: Meta<typeof GameInfo> = {
  title: 'Game/Info',
  component: GameInfo
}

export default meta
type Story = StoryObj<typeof GameInfo>

export const Primary: Story = {
  args: game,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '90rem', margin: 'auto', padding: '1.5rem' }}>
        <Story />
      </div>
    )
  ]
}
