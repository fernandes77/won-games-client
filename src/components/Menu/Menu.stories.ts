import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'

const meta: Meta<typeof Menu> = {
  component: Menu
}

export default meta
type Story = StoryObj<typeof Menu>

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
}
