import { CartIcon } from '@/components/CartIcon/CartIcon'
import { CartList } from '@/components/CartList/CartList'
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger
} from '@/components/Dropdown/Dropdown'
import { GameItemProps } from '@/components/GameItem/GameItem'
import { ClassName } from '@/types/class-name'

export type CartDropdownProps = {
  items?: GameItemProps[]
  total?: string
} & ClassName

export const CartDropdown = ({
  items,
  total,
  className
}: CartDropdownProps) => (
  <main className={className}>
    <Dropdown>
      <DropdownTrigger asChild className="cursor-pointer">
        <span role="button">
          <CartIcon quantity={items?.length} />
        </span>
      </DropdownTrigger>

      <DropdownContent className="w-[35rem]">
        <CartList items={items} total={total} hasButton />
      </DropdownContent>
    </Dropdown>
  </main>
)
