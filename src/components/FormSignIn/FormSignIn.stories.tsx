import type { Meta, StoryObj } from '@storybook/react'
import { FormSignIn } from './FormSignIn'

const meta: Meta<typeof FormSignIn> = {
  component: FormSignIn
}

export default meta
type Story = StoryObj<typeof FormSignIn>

export const Primary: Story = {
  parameters: { backgrounds: { default: 'won-light' } },
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '360px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    )
  ]
}
