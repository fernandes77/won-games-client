import type { Meta, StoryObj } from '@storybook/react'
import { Empty } from './Empty'

const meta: Meta<typeof Empty> = {
  component: Empty
}

export default meta
type Story = StoryObj<typeof Empty>

export const Primary: Story = {
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  }
}
