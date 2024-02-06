import itemsMock from '@/components/CartList/CartList.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { CartDropdown } from './CartDropdown'

const meta: Meta<typeof CartDropdown> = {
  component: CartDropdown
}

export default meta
type Story = StoryObj<typeof CartDropdown>

export const Primary: Story = {
  args: { items: itemsMock, total: 'R$ 430,00' },
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

export const Empty: Story = {
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
