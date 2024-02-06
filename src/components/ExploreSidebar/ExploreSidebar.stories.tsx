import type { Meta, StoryObj } from '@storybook/react'
import { ExploreSidebar } from './ExploreSidebar'
import items from './ExploreSidebar.mock'

const meta: Meta<typeof ExploreSidebar> = {
  component: ExploreSidebar,
  decorators: [
    (Story) => (
      <div style={{ padding: 16, maxWidth: 320 }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof ExploreSidebar>

export const Primary: Story = { args: { items } }

export const WithInitialValues: Story = {
  args: { items, initialValues: { windows: true, sort_by: 'low-to-high' } }
}
