import type { Meta, StoryObj } from '@storybook/react'
import { OrdersList } from './OrdersList'
import itemsMock from './OrdersList.mock'

const meta: Meta<typeof OrdersList> = {
  component: OrdersList
}

export default meta
type Story = StoryObj<typeof OrdersList>

export const Primary: Story = {
  args: { items: itemsMock },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
}
