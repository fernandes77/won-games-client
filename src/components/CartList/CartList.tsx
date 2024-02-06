import { Button } from '@/components/Button/Button'
import { Empty } from '@/components/Empty/Empty'
import { GameItem, GameItemProps } from '@/components/GameItem/GameItem'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

export const CartList = ({
  items = [],
  total,
  hasButton = false
}: CartListProps) => (
  <main className="bg-white flex flex-col self-start">
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}

        <div
          className="bg-gray-lighter text-black font-bold text-sm p-5 flex justify-between
          items-center min-md:text-md min-md:p-sm"
        >
          {!hasButton && <span>Total:</span>}
          <span className="text-primary">{total}</span>

          {hasButton && (
            <Button as={{ type: 'link', props: { href: '/cart' } }}>
              Buy it now
            </Button>
          )}
        </div>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers."
        hasLink
        className="pb-md [&_img]:max-w-[12.5rem] [&_h2]:text-lg [&_p]:text-black [&_p]:text-base"
      />
    )}
  </main>
)
