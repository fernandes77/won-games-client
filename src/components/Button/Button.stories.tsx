import type { Meta, StoryObj } from '@storybook/react'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Buy now' }
}
export const WithIcon: Story = {
  args: { children: 'Buy now', icon: <IconShoppingCartPlus /> }
}
export const AsLink: Story = {
  args: { children: 'Buy now', as: { type: 'a' } }
}
