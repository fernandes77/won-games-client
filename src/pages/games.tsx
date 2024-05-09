import { Container } from '@/components/Container/Container'
import {
  ExploreSidebar,
  ItemProps
} from '@/components/ExploreSidebar/ExploreSidebar'
import filterItems from '@/components/ExploreSidebar/ExploreSidebar.mock'
import { GameCard, GameCardProps } from '@/components/GameCard/GameCard'
import { Grid } from '@/components/Grid/Grid'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'
import { QUERY_GAMES, useQueryGames } from '@/graphql/queries/games'
import { StoreLayout } from '@/layouts/StoreLayout'
import { initializeApollo } from '@/utils/apollo'
import { IconArrowDown } from '@tabler/icons-react'

type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

export default function Games(props: GamesTemplateProps) {
  const { data, loading } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <StoreLayout>
      <Container className="min-md:grid min-md:grid-cols-[16.25rem_1fr] min-md:gap-gutter">
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.games?.data?.map((game, index) => (
                <GameCard
                  key={index}
                  title={game.attributes!.name}
                  slug={game.attributes?.slug!}
                  developer={
                    game.attributes!.developers!.data[0].attributes!.name
                  }
                  img={`http://localhost:1337${
                    game.attributes!.cover!.data!.attributes!.url
                  }`}
                  price={game.attributes!.price}
                />
              ))}
            </Grid>

            <div
              role="button"
              onClick={handleShowMore}
              className="flex flex-col items-center text-white p-md uppercase font-bold cursor-pointer"
            >
              <p>Show More</p>

              <IconArrowDown size={35} className="text-primary" />
            </div>
          </section>
        )}
      </Container>
    </StoreLayout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
