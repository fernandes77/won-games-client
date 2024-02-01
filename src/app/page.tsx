import { BannerSlider } from '@/components/BannerSlider/BannerSlider'
import banners from '@/components/BannerSlider/BannerSlider.mock'
import { Container } from '@/components/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { GameCardSlider } from '@/components/GameCardSlider/GameCardSlider'
import games from '@/components/GameCardSlider/GameCardSlider.mock'
import { Heading } from '@/components/Heading/Heading'
import { Highlight } from '@/components/Highlight/Highlight'
import highlight from '@/components/Highlight/Highlight.mock'
import { Menu } from '@/components/Menu/Menu'
import { Children } from '@/types/children'
import { twMerge } from 'tailwind-merge'

const HomeSection = ({
  children,
  className
}: { className?: string } & Children) => (
  <section
    className={twMerge(
      'mb-[5rem] [&>*]:mb-md max-md:[&_.highlight]:-mx-half-gutter max-huge:[&_.game-card-slider]:-mr-half-gutter',
      className
    )}
  >
    {children}
  </section>
)

const BannerSection = () => (
  <section className="my-lg -mx-half-gutter min-md:my-lg min-md:mx-0 relative z-base">
    <BannerSlider items={banners} />
  </section>
)

const NewsSection = () => (
  <HomeSection
    className="min-md:mb-0 min-md:pt-[8.75rem] min-md:pb-[6.25rem] min-md:bg-light
    min-md:[clip-path:polygon(0_0,100%_15%,100%_100%,0_85%)] mb-[7rem] min-lg:mt-[-8.1rem]"
  >
    <Container>
      <Heading
        lineLeft
        lineColor="secondary"
        className="md:[&_h2]:text-black [&_h2]:text-white"
      >
        News
      </Heading>
      <GameCardSlider items={games} color="black" />
    </Container>
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
  <HomeSection className="[&_.highlight]:mt-[6rem]">
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

      <Container>
        <MostPopularSection />

        <UpcomingSection />

        <FreeGamesSection />
      </Container>

      <FooterSection />
    </section>
  )
}
