import type { Meta, StoryObj } from '@storybook/react'
import { Gallery } from './Gallery'
import galleryMock from './Gallery.mock'

const meta: Meta<typeof Gallery> = {
  component: Gallery
}

export default meta
type Story = StoryObj<typeof Gallery>

export const Primary: Story = {
  args: { items: galleryMock },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
