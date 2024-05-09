import { BannerSlider } from '@/components/BannerSlider/BannerSlider'
import banners from '@/components/BannerSlider/BannerSlider.mock'
import { Container } from '@/components/Container/Container'
import { GameCardSlider } from '@/components/GameCardSlider/GameCardSlider'
import games from '@/components/GameCardSlider/GameCardSlider.mock'
import { Heading } from '@/components/Heading/Heading'
import highlight from '@/components/Highlight/Highlight.mock'
import { Showcase } from '@/components/Showcase/Showcase'
import { StoreLayout } from '@/layouts/StoreLayout'

const BannerSection = () => (
  <Container>
    <section className="mb-lg -mx-half-gutter min-md:mb-lg relative z-base">
      <BannerSlider items={banners} />
    </section>
  </Container>
)

const NewsSection = () => (
  <div
    className="min-md:mb-0 min-md:pt-[8.75rem] min-md:pb-[6.25rem] min-md:bg-light
    min-md:[clip-path:polygon(0_0,100%_15%,100%_100%,0_85%)] mb-[7rem] min-lg:mt-[-8.1rem]
    [&_h2]:min-md:text-black"
  >
    <Container as="section" className="mb-[5rem]">
      <Heading
        className="[&_h2]:min-md:text-black mb-md"
        lineLeft
        lineColor="secondary"
      >
        News
      </Heading>
      <GameCardSlider
        className="mb-md max-huge:-mr-half-gutter"
        items={games}
      />
    </Container>
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

export default function Home() {
  return (
    <StoreLayout>
      <BannerSection />

      <NewsSection />

      <MostPopularSection />

      <UpcomingSection />

      <FreeGamesSection />
    </StoreLayout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      banners: banners,
      newGames: games,
      mostPopularHighlight: highlight,
      mostPopularGames: games,
      upcomingGames: games,
      upcomingHighlight: highlight,
      upcomingMoreGames: games,
      freeGames: games,
      freeHighlight: highlight
    }
  }
}
