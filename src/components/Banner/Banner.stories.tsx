import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
  component: Banner
}

export default meta
type Story = StoryObj<typeof Banner>

export const Primary: Story = {
  args: {
    buttonLabel: 'Buy now',
    buttonLink: '/games',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    title: 'Defy death'
  },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '65rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}

export const WithRibbon: Story = {
  args: {
    buttonLabel: 'Buy now',
    buttonLink: '/games',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    title: 'Defy death',
    ribbon: '20% OFF',
    ribbonSize: 'md',
    ribbonColor: 'primary'
  },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '65rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
}
