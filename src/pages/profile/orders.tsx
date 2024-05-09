import { OrdersList } from '@/components/OrdersList/OrdersList'
import ordersMock from '@/components/OrdersList/OrdersList.mock'
import { ProfileLayout } from '@/layouts/ProfileLayout'

export default function Orders() {
  return (
    <ProfileLayout>
      <OrdersList items={ordersMock} />
    </ProfileLayout>
  )
}
