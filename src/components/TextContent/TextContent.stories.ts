import type { Meta, StoryObj } from '@storybook/react'
import { TextContent } from './TextContent'
import textMock from './TextContent.mock'

const meta: Meta<typeof TextContent> = {
  component: TextContent
}

export default meta
type Story = StoryObj<typeof TextContent>

export const Primary: Story = {
  args: textMock
}
