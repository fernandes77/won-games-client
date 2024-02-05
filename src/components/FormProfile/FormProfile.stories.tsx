import type { Meta, StoryObj } from '@storybook/react'
import { FormProfile } from './FormProfile'

const meta: Meta<typeof FormProfile> = {
  title: 'Form/Profile',
  component: FormProfile
}

export default meta
type Story = StoryObj<typeof FormProfile>

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 860, margin: 'auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: { backgrounds: { default: 'won-light' } }
}
