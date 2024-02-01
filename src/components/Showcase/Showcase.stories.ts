import type { Meta, StoryObj } from '@storybook/react'
import { Showcase } from './Showcase'

const meta: Meta<typeof Showcase> = {
  component: Showcase
}

export default meta
type Story = StoryObj<typeof Showcase>

export const Primary: Story = {}
