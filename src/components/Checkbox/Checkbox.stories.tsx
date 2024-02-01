import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  decorators: [
    () => (
      <>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Action"
            labelFor="action"
            isChecked
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox name="category" label="Adventure" labelFor="adventure" />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox name="category" label="Strategy" labelFor="strategy" />
        </div>
      </>
    )
  ]
}
