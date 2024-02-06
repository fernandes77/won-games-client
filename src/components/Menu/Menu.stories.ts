import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'

const meta: Meta<typeof Menu> = {
  component: Menu
}

export default meta
type Story = StoryObj<typeof Menu>

export const Primary: Story = {}

export const Logged: Story = { args: { username: 'Rodrigo' } }
