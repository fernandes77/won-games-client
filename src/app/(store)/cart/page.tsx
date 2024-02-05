'use client'

import { CartList, CartListProps } from '@/components/CartList/CartList'
import itemsMock from '@/components/CartList/CartList.mock'
import { Container } from '@/components/Container/Container'
import { Divider } from '@/components/Divider/Divider'
import { Empty } from '@/components/Empty/Empty'
import { GameCardProps } from '@/components/GameCard/GameCard'
import gamesMock from '@/components/GameCardSlider/GameCardSlider.mock'
import { Heading } from '@/components/Heading/Heading'
import { HighlightProps } from '@/components/Highlight/Highlight'
import highlightMock from '@/components/Highlight/Highlight.mock'
import {
  PaymentOptions,
  PaymentOptionsProps
} from '@/components/PaymentOptions/PaymentOptions'
import cardsMock from '@/components/PaymentOptions/PaymentOptions.mock'
import { Showcase } from '@/components/Showcase/Showcase'

const props = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

export default function Cart() {
  const handlePayment = () => ({})

  return (
    <>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {props.items.length ? (
          <div className="grid grid-cols-[1fr] gap-lg my-lg min-md:grid-cols-[2fr_1fr]">
            <CartList items={props.items} total={props.total} />

            <PaymentOptions cards={props.cards} handlePayment={handlePayment} />
          </div>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={props.recommendedGames}
        highlight={props.recommendedHighlight}
      />
    </>
  )
}
