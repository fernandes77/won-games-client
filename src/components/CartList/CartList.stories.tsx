import type { Meta, StoryObj } from '@storybook/react'
import { CartList } from './CartList'
import items from './CartList.mock'

const meta: Meta<typeof CartList> = {
  component: CartList
}

export default meta
type Story = StoryObj<typeof CartList>

export const Primary: Story = {
  args: { items, total: 'R$ 430,00' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    )
  ]
}
