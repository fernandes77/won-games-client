import type { Meta, StoryObj } from '@storybook/react'
import { UserDropdown } from './UserDropdown'

const meta: Meta<typeof UserDropdown> = {
  component: UserDropdown
}

export default meta
type Story = StoryObj<typeof UserDropdown>

export const Primary: Story = {
  args: { username: 'Rodrigo' },
  decorators: [
    (Story) => (
      <div
        style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Story />
      </div>
    )
  ]
}
