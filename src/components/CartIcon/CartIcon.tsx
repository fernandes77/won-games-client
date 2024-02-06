import { IconShoppingCart } from '@tabler/icons-react'

export type CartIconProps = {
  quantity?: number
}

export const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <div className="text-white w-6 h-6 relative">
    {quantity > 0 && (
      <span
        aria-label="Cart Items"
        className="flex items-center justify-center bg-secondary text-white
        text-[0.625rem] rounded-full w-4 h-4 absolute -top-1 -right-1"
      >
        {quantity}
      </span>
    )}
    <IconShoppingCart aria-label="Shopping Cart" />
  </div>
)
