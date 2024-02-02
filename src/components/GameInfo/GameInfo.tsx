import { Button } from '@/components/Button/Button'
import { Heading } from '@/components/Heading/Heading'
import { Ribbon } from '@/components/Ribbon/Ribbon'
import { IconHeart, IconShoppingCartPlus } from '@tabler/icons-react'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

export const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <div className="relative bg-white p-sm">
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon
      color="secondary"
      className="right-[-0.625rem] before:border-r-[0.625rem] min-md:right-sm
      min-md:top-sm min-md:text-lg min-md:before:border-none"
    >
      {`$${price}`}
    </Ribbon>

    <p className="text-sm text-gray mb-sm min-md:max-w-[48rem]">
      {description}
    </p>

    <div className="flex flex-col items-center min-md:flex-row-reverse">
      <Button
        icon={<IconShoppingCartPlus />}
        size="lg"
        className="w-full mb-xxs min-md:w-auto min-md:mb-0"
      >
        Add to cart
      </Button>
      <Button
        icon={<IconHeart />}
        size="lg"
        minimal
        className="w-full mb-xxs min-md:w-auto min-md:mb-0"
      >
        Wishlist
      </Button>
    </div>
  </div>
)
