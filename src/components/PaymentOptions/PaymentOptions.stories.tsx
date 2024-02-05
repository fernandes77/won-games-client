import type { Meta, StoryObj } from '@storybook/react'
import { PaymentOptions } from './PaymentOptions'
import cards from './PaymentOptions.mock'

const meta: Meta<typeof PaymentOptions> = {
  component: PaymentOptions
}

export default meta
type Story = StoryObj<typeof PaymentOptions>

export const Primary: Story = {
  args: { cards, handlePayment: () => {} },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, maxWidth: 400 }}>
        <Story />
      </div>
    )
  ]
}
