import { CartIcon } from '@/components/CartIcon/CartIcon'
import { CartList } from '@/components/CartList/CartList'
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger
} from '@/components/Dropdown/Dropdown'
import { GameItemProps } from '@/components/GameItem/GameItem'

export type CartDropdownProps = {
  items?: GameItemProps[]
  total?: string
}

export const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <main>
    <Dropdown>
      <DropdownTrigger asChild>
        <button>
          <CartIcon quantity={items?.length} />
        </button>
      </DropdownTrigger>

      <DropdownContent className="w-[35rem]">
        <CartList items={items} total={total} hasButton />
      </DropdownContent>
    </Dropdown>
  </main>
)
