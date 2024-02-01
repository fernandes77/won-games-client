import { Container } from '@/components/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Menu } from '@/components/Menu/Menu'
import { Children } from '@/types/children'

export const StoreBase = ({ children }: Children) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <section
      className="mt-lg pb-xs pt-xxl bg-white [clip-path:polygon(0_5%,100%_0%,100%_100%,0_100%)]
      min-md:pt-[7rem] min-md:[clip-path:polygon(0_15%,100%_0%,100%_100%,0_100%)]"
    >
      <Container>
        <Footer />
      </Container>
    </section>
  </section>
)
