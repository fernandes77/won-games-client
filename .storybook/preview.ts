import type { Preview } from '@storybook/react'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'won-light',
      values: [
        {
          name: 'won-light',
          value: '#fafafa'
        },
        {
          name: 'won-dark',
          value: '#06092B'
        }
      ]
    }
  }
}

export default preview
