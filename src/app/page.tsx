import { BannerSlider } from '@/components/BannerSlider/BannerSlider'
import banners from '@/components/BannerSlider/BannerSlider.mock'
import { Footer } from '@/components/Footer/Footer'
import { GameCardSlider } from '@/components/GameCardSlider/GameCardSlider'
import games from '@/components/GameCardSlider/GameCardSlider.mock'
import { Heading } from '@/components/Heading/Heading'
import { Highlight } from '@/components/Highlight/Highlight'
import highlight from '@/components/Highlight/Highlight.mock'
import { Menu } from '@/components/Menu/Menu'

export default function Home() {
  return (
    <section>
      <Menu />
      <BannerSlider items={banners} />

      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <GameCardSlider items={games} color="black" />

      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Highlight {...highlight} />
      <GameCardSlider items={games} />

      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>

      <GameCardSlider items={games} />
      <Highlight {...highlight} />
      <GameCardSlider items={games} />

      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...highlight} />
      <GameCardSlider items={games} />

      <Footer />
    </section>
  )
}
