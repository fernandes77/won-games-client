import type { Meta, StoryObj } from '@storybook/react'
import { CartList } from './CartList'
import items from './CartList.mock'

const meta: Meta<typeof CartList> = {
  component: CartList,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof CartList>

export const Primary: Story = {
  args: { items, total: 'R$ 430,00' }
}

export const WithButton: Story = {
  args: { items, total: 'R$ 430,00', hasButton: true }
}

export const Empty: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <CartList />
      </div>
    )
  ]
}
