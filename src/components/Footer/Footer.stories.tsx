import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  component: Footer
}

export default meta
type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  parameters: { backgrounds: { default: 'won-light' } },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '65rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
