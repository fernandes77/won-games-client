import { Container } from '@/components/Container/Container'
import { Empty } from '@/components/Empty/Empty'
import { StoreLayout } from '@/layouts/StoreLayout'

export default function Page404() {
  return (
    <StoreLayout>
      <Container>
        <Empty
          title="404: Not found"
          description="Ops...this page does not exist. Go back to the store and enjoy our offers."
          hasLink
        />
      </Container>
    </StoreLayout>
  )
}
