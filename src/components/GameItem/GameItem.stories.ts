import type { Meta, StoryObj } from '@storybook/react'
import { GameItem } from './GameItem'
import item from './GameItem.mock'

const meta: Meta<typeof GameItem> = {
  title: 'Game/Item',
  component: GameItem,
  parameters: { backgrounds: { default: 'won-light' } }
}

export default meta
type Story = StoryObj<typeof GameItem>

export const Primary: Story = {
  args: item
}

export const Paid: Story = {
  args: {
    ...item,
    downloadLink: 'https://wongames.com/game/download/21312ndasd',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  }
}
