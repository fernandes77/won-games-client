import type { Meta, StoryObj } from '@storybook/react'
import { Ribbon } from './Ribbon'

const meta: Meta<typeof Ribbon> = {
  component: Ribbon
}

export default meta
type Story = StoryObj<typeof Ribbon>

export const Primary: Story = {
  args: { children: 'Best Seller' },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '40rem',
          height: '25rem',
          position: 'relative',
          backgroundColor: '#888'
        }}
      >
        <Story />
      </div>
    )
  ]
}
