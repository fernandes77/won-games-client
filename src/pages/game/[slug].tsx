import { Container } from '@/components/Container/Container'
import { Divider } from '@/components/Divider/Divider'
import { Gallery, GalleryImageProps } from '@/components/Gallery/Gallery'
import { GameCardProps } from '@/components/GameCard/GameCard'
import gamesMock from '@/components/GameCardSlider/GameCardSlider.mock'
import {
  GameDetails,
  GameDetailsProps
} from '@/components/GameDetails/GameDetails'
import { GameInfo, GameInfoProps } from '@/components/GameInfo/GameInfo'
import { HighlightProps } from '@/components/Highlight/Highlight'
import highlightMock from '@/components/Highlight/Highlight.mock'
import { Showcase } from '@/components/Showcase/Showcase'
import { TextContent } from '@/components/TextContent/TextContent'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from '@/graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from '@/graphql/queries/games'
import { StoreLayout } from '@/layouts/StoreLayout'
import { initializeApollo } from '@/utils/apollo'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

const apolloClient = initializeApollo()

type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

export default function Game(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <StoreLayout>
      <div
        style={{ backgroundImage: `url(${props.cover})` }}
        role="image"
        aria-label="cover"
        className="absolute top-0 right-0 left-0 h-[24.7rem] bg-cover bg-[top_center] opacity-40
        min-md:h-[43.75rem] min-md:[clip-path:polygon(0_0,100%_0,100%_100%,0_85%)]"
      />

      <main className="mt-[12.5rem] min-md:mt-[28rem]">
        <Container>
          <section className="mb-xl min-md:mb-24">
            <GameInfo {...props.gameInfo} />
          </section>

          <section className="mb-xl min-md:mb-24 hidden min-md:block">
            {!!props.gallery && <Gallery items={props.gallery} />}
          </section>

          <section
            className="mb-xl min-md:mb-24 [&_.description\_\_copyrights]:text-gray
            [&_.description\_\_copyrights]:text-xs [&_.description\_\_copyrights]:mt-md"
          >
            <TextContent title="Description" content={props.description} />
          </section>

          <section className="mb-xl min-md:mb-24">
            <GameDetails {...props.details} />
            <Divider />
          </section>
        </Container>

        <Showcase
          title="Upcoming"
          games={props.upcomingGames}
          highlight={props.upcomingHighlight}
        />

        <Showcase
          title="You may like these games"
          games={props.recommendedGames}
        />
      </main>
    </StoreLayout>
  )
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games?.data.map((game) => ({
    params: { slug: game.attributes!.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params?.slug)
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games?.data.length) {
    return { notFound: true }
  }

  const game = data.games.data[0].attributes!

  console.log({ test: game.description })

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover!.data!.attributes!.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery?.data.map((item) => ({
        src: `http://localhost:1337${item.attributes!.src}`,
        label: item.attributes!.label
      })),
      description: game.description,
      details: {
        developer: game.developers!.data[0].attributes!.name,
        releaseDate: game.release_date,
        platforms: game.platforms!.data.map(
          (platform) => platform.attributes!.name
        ),
        publisher: game.publisher!.data!.attributes!.name,
        rating: game.rating,
        genres: game.categories!.data.map(
          (category) => category.attributes!.name
        )
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
