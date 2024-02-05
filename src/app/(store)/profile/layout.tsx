import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import { ProfileMenu } from '@/components/ProfileMenu/ProfileMenu'
import { Children } from '@/types/children'

export default function ProfileLayout({ children }: Children) {
  return (
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>

      <main className="mt-md min-md:grid min-md:grid-cols-[20rem_1fr] min-md:gap-double-gutter">
        <ProfileMenu />

        <div className="w-full bg-white text-black p-xs">{children}</div>
      </main>
    </Container>
  )
}
