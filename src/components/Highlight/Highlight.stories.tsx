import type { Meta, StoryObj } from '@storybook/react'
import { Highlight } from './Highlight'
import item from './Highlight.mock'

const meta: Meta<typeof Highlight> = {
  component: Highlight
}

export default meta
type Story = StoryObj<typeof Highlight>

export const Primary: Story = {
  args: item,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '65rem' }}>
        <Story />
      </div>
    )
  ]
}

export const WithFloatImage: Story = {
  args: { ...item, floatImage: '/img/red-dead-float.png' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '65rem' }}>
        <Story />
      </div>
    )
  ]
}
