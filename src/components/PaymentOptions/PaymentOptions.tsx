'use client'

import { Button } from '@/components/Button/Button'
import { Heading } from '@/components/Heading/Heading'
import { Radio } from '@/components/Radio/Radio'
import { IconPlus, IconShoppingCart } from '@tabler/icons-react'
import { useState } from 'react'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const cssItem =
  'bg-gray-light rounded-sm text-black px-xxs h-[3.125rem] cursor-pointer flex items-center'

export const PaymentOptions = ({
  cards,
  handlePayment
}: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <main className="bg-white">
      <div className="p-sm">
        <Heading color="black" size="sm" lineBottom>
          Payment
        </Heading>

        <div className="flex flex-col">
          {cards?.map((card) => (
            <label
              key={card.number}
              className={`${cssItem} justify-between mb-xxs last:mb-0`}
            >
              <span className="flex items-center">
                <img src={card.img} alt={card.flag} className="mr-xxs" />
                {card.number}
              </span>

              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </label>
          ))}

          <div role="button" className={cssItem}>
            <IconPlus size={14} className="ml-xxs mr-xs w-6" /> Add a new credit
            card
          </div>
        </div>
      </div>

      <div className="bg-gray-lighter text-black font-bold p-sm flex items-center">
        <Button
          as={{ type: 'link', props: { href: '/' } }}
          fullWidth
          minimal
          className="px-xxs outline-none"
        >
          Continue shopping
        </Button>

        <Button
          fullWidth
          icon={<IconShoppingCart />}
          as={{
            type: 'button',
            props: { onClick: handlePayment, disabled: !checked }
          }}
        >
          Buy now
        </Button>
      </div>
    </main>
  )
}
