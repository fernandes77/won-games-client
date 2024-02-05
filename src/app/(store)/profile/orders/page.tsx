import { OrdersList } from '@/components/OrdersList/OrdersList'
import ordersMock from '@/components/OrdersList/OrdersList.mock'

export default function Orders() {
  return <OrdersList items={ordersMock} />
}
