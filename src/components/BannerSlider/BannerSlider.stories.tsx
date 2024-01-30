import type { Meta, StoryObj } from '@storybook/react'
import { BannerSlider } from './BannerSlider'
import items from './BannerSlider.mock'

const meta: Meta<typeof BannerSlider> = {
  component: BannerSlider
}

export default meta
type Story = StoryObj<typeof BannerSlider>

export const Primary: Story = {
  args: { items },
  parameters: { backgrounds: { default: 'won-dark' } },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
