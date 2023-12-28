import type { Meta, StoryObj } from '@storybook/react'
import { Highlight } from './Highlight'

const meta: Meta<typeof Highlight> = {
  component: Highlight
}

export default meta
type Story = StoryObj<typeof Highlight>

const commonArgs = {
  title: 'Red Dead Redemption is back',
  subtitle: 'Come see John’s new adventures',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

export const Primary: Story = {
  args: commonArgs,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '65rem' }}>
        <Story />
      </div>
    )
  ]
}

export const WithFloatImage: Story = {
  args: { ...commonArgs, floatImage: '/img/red-dead-float.png' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '65rem' }}>
        <Story />
      </div>
    )
  ]
}
