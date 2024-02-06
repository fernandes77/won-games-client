import type { Meta, StoryObj } from '@storybook/react'
import { CartIcon } from './CartIcon'

const meta: Meta<typeof CartIcon> = {
  component: CartIcon
}

export default meta
type Story = StoryObj<typeof CartIcon>

export const Primary: Story = {}
export const WithItems: Story = { args: { quantity: 3 } }
