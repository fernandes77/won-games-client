import type { Meta, StoryObj } from '@storybook/react'
import { StoreBase } from './StoreBase'

const meta: Meta<typeof StoreBase> = {
  component: StoreBase
}

export default meta
type Story = StoryObj<typeof StoreBase>

export const Primary: Story = {}
