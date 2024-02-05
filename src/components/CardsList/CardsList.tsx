import { Heading } from '@/components/Heading/Heading'
import { PaymentCard } from '@/components/PaymentOptions/PaymentOptions'

export type CardsListProps = {
  cards?: PaymentCard[]
}

export const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="sm">
      My cards
    </Heading>

    {cards?.map((card) => (
      <div
        key={card.number}
        className="bg-gray-light text-black py-[0.75rem] px-xs flex items-center
        mb-xs last:mb-0"
      >
        <img src={card.img} alt={card.flag} />
        <span className="ml-xxs">{card.number}</span>
      </div>
    ))}
  </>
)
