import { BannerSlider } from '@/components/BannerSlider/BannerSlider'
import banners from '@/components/BannerSlider/BannerSlider.mock'
import { Footer } from '@/components/Footer/Footer'
import { GameCardSlider } from '@/components/GameCardSlider/GameCardSlider'
import games from '@/components/GameCardSlider/GameCardSlider.mock'
import { Heading } from '@/components/Heading/Heading'
import { Highlight } from '@/components/Highlight/Highlight'
import highlight from '@/components/Highlight/Highlight.mock'
import { Menu } from '@/components/Menu/Menu'
import { Children } from '@/types/children'

const HomeSection = ({ children }: Children) => (
  <section className="[&>*]:mb-md md:[&_.highlight]:-mx-half-gutter">
    {children}
  </section>
)

const BannerSection = () => (
  <HomeSection>
    <BannerSlider items={banners} />
  </HomeSection>
)

const NewsSection = () => (
  <HomeSection>
    <Heading lineLeft lineColor="secondary">
      News
    </Heading>
    <GameCardSlider items={games} color="black" />
  </HomeSection>
)

const MostPopularSection = () => (
  <HomeSection>
    <Heading lineLeft lineColor="secondary">
      Most Popular
    </Heading>
    <Highlight {...highlight} />
    <GameCardSlider items={games} />
  </HomeSection>
)

const UpcomingSection = () => (
  <HomeSection>
    <Heading lineLeft lineColor="secondary">
      Upcoming
    </Heading>
    <GameCardSlider items={games} />
    <Highlight {...highlight} />
    <GameCardSlider items={games} />
  </HomeSection>
)

const FreeGamesSection = () => (
  <HomeSection>
    <Heading lineLeft lineColor="secondary">
      Free Games
    </Heading>
    <Highlight {...highlight} />
    <GameCardSlider items={games} />
  </HomeSection>
)

const FooterSection = () => (
  <HomeSection>
    <Footer />
  </HomeSection>
)

export default function Home() {
  return (
    <section>
      <Menu />

      <BannerSection />

      <NewsSection />

      <MostPopularSection />

      <UpcomingSection />

      <FreeGamesSection />

      <FooterSection />
    </section>
  )
}
