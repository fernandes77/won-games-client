'use client'

import { Footer } from '@/components/Footer/Footer'
import { Heading } from '@/components/Heading/Heading'
import { Menu } from '@/components/Menu/Menu'

export default function Home() {
  return (
    <section>
      <Menu />

      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>

      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Footer />
    </section>
  )
}
