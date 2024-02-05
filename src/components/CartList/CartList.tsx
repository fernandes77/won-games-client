import { GameItem, GameItemProps } from '@/components/GameItem/GameItem'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

export const CartList = ({ items, total }: CartListProps) => (
  <main className="bg-white flex flex-col self-start">
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <div
      className="bg-gray-lighter text-black font-bold text-sm p-5 flex justify-between
      min-md:text-md min-md:p-sm"
    >
      Total <span className="text-primary">{total}</span>
    </div>
  </main>
)
