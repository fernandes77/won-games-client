import { CardsList } from '@/components/CardsList/CardsList'
import mockCards from '@/components/PaymentOptions/PaymentOptions.mock'
import { ProfileLayout } from '@/layouts/ProfileLayout'

export default function Cards() {
  return (
    <ProfileLayout>
      <CardsList cards={mockCards} />
    </ProfileLayout>
  )
}
