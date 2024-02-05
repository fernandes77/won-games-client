import { Empty } from '@/components/Empty/Empty'
import { GameItem, GameItemProps } from '@/components/GameItem/GameItem'
import { Heading } from '@/components/Heading/Heading'

export type OrdersListProps = {
  items?: GameItemProps[]
}

export const OrdersList = ({ items = [] }: OrdersListProps) => (
  <div>
    <Heading lineBottom lineColor="primary" color="black" size="sm">
      My orders
    </Heading>

    {items.length ? (
      items.map((item) => (
        <GameItem
          key={item.downloadLink}
          {...item}
          className="last:border-b-0"
        />
      ))
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </div>
)
