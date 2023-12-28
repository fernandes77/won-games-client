import { Button } from '@/components/Button/Button'
import {
  Ribbon,
  type RibbonColors,
  type RibbonSizes
} from '@/components/Ribbon/Ribbon'
import type { Children } from '@/types/children'
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart
} from '@tabler/icons-react'

type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Price = ({
  children,
  isPromotional = false
}: { isPromotional?: boolean } & Children) => {
  const variantMap = isPromotional
    ? 'text-gray line-through mr-xxs'
    : 'text-white p-xxs bg-secondary rounded mr-[0.25rem]'

  return (
    <div className={`${variantMap} inline-flex font-bold h-7 items-center`}>
      {children}
    </div>
  )
}

export const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'sm'
}: GameCardProps) => (
  <article className="relative flex flex-col w-full h-full bg-white">
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <div
      className="bg-[linear-gradient(to_right,#f6f7f8_0%,#edeef1_20%,#f6f7f8_40%,#f6f7f8_100%)]
        bg-[#f6f7f8] h-36 w-full bg-[length:50rem_8.75rem] animate-placeholder-shimmer
        "
    >
      <img className="w-full h-full object-cover" src={img} alt={title} />
    </div>

    <div className="flex flex-col justify-between relative h-full m-xs">
      <div className="max-w-[calc(100%_-_1.5rem)]">
        <h3 className="text-md leading-snug font-bold text-black">{title}</h3>
        <h4 className="text-sm font-bold text-gray">{developer}</h4>
      </div>

      <div
        className="text-primary absolute right-0 top[-5px] cursor-pointer [&_svg]:w-6"
        onClick={onFav}
        role="button"
      >
        {favorite ? (
          <IconHeartFilled aria-label="Remove from Wishlist" />
        ) : (
          <IconHeart aria-label="Add to Wishlist" />
        )}
      </div>

      <div className="flex items-center justify-end mt-xxs">
        {!!promotionalPrice && <Price isPromotional>{price}</Price>}
        <Price>{promotionalPrice || price}</Price>
        <Button icon={<IconShoppingCart />} size="sm" children={null} />
      </div>
    </div>
  </article>
)
