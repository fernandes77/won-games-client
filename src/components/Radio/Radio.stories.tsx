import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  component: Radio
}

export default meta
type Story = StoryObj<typeof Radio>

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
          <Radio
            label="primeiro"
            labelFor="primeiro"
            id="primeiro"
            name="nome"
            value="primeiro"
            defaultChecked
          />
        </div>
        <div style={{ padding: 10 }}>
          <Radio
            label="segundo"
            labelFor="segundo"
            id="segundo"
            name="nome"
            value="segundo"
          />
        </div>
        <div style={{ padding: 10 }}>
          <Radio
            label="terceiro"
            labelFor="terceiro"
            id="terceiro"
            name="nome"
            value="terceiro"
          />
        </div>
      </>
    )
  ]
}
