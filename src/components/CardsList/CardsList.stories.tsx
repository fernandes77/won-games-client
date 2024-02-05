import cardsMock from '@/components/PaymentOptions/PaymentOptions.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { CardsList } from './CardsList'

const meta: Meta<typeof CardsList> = {
  component: CardsList
}

export default meta
type Story = StoryObj<typeof CardsList>

export const Primary: Story = {
  args: { cards: cardsMock },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
}
