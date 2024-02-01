import { BannerSlider } from '@/components/BannerSlider/BannerSlider'
import banners from '@/components/BannerSlider/BannerSlider.mock'
import { Container } from '@/components/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import games from '@/components/GameCardSlider/GameCardSlider.mock'
import highlight from '@/components/Highlight/Highlight.mock'
import { Menu } from '@/components/Menu/Menu'
import { Showcase } from '@/components/Showcase/Showcase'

const BannerSection = () => (
  <section className="my-lg -mx-half-gutter min-md:my-lg min-md:mx-0 relative z-base">
    <BannerSlider items={banners} />
  </section>
)

const NewsSection = () => (
  <div
    className="min-md:mb-0 min-md:pt-[8.75rem] min-md:pb-[6.25rem] min-md:bg-light
    min-md:[clip-path:polygon(0_0,100%_15%,100%_100%,0_85%)] mb-[7rem] min-lg:mt-[-8.1rem]"
  >
    <Showcase title="News" games={games} color="black" />
  </div>
)

const MostPopularSection = () => (
  <Showcase title="Most Popular" highlight={highlight} games={games} />
)

const UpcomingSection = () => (
  <div className="[&_.highlight]:mt-[6rem]">
    <Showcase title="Upcoming" games={games} />
    <Showcase highlight={highlight} games={games} />
  </div>
)

const FreeGamesSection = () => (
  <Showcase title="Free games" highlight={highlight} games={games} />
)

const FooterSection = () => (
  <section
    className="mt-lg pb-xs pt-xxl bg-white [clip-path:polygon(0_5%,100%_0%,100%_100%,0_100%)]
    min-md:pt-[7rem] min-md:[clip-path:polygon(0_15%,100%_0%,100%_100%,0_100%)]"
  >
    <Container>
      <Footer />
    </Container>
  </section>
)

export default function Home() {
  return (
    <section>
      <Container>
        <Menu />

        <BannerSection />
      </Container>

      <NewsSection />

      <MostPopularSection />

      <UpcomingSection />

      <FreeGamesSection />

      <FooterSection />
    </section>
  )
}
