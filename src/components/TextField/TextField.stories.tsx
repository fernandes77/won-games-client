import type { Meta, StoryObj } from '@storybook/react'
import { IconMail } from '@tabler/icons-react'
import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Form/TextField',
  component: TextField
}

export default meta
type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300, padding: 15 }}>
        <Story />
      </div>
    )
  ],
  args: {
    icon: <IconMail />,
    label: 'E-mail',
    name: 'email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  }
}
