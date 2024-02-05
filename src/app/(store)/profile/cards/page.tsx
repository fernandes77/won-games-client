import { CardsList } from '@/components/CardsList/CardsList'
import mockCards from '@/components/PaymentOptions/PaymentOptions.mock'

export default function Cards() {
  return <CardsList cards={mockCards} />
}
