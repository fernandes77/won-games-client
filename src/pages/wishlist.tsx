import { Container } from '@/components/Container/Container'
import { Divider } from '@/components/Divider/Divider'
import { Empty } from '@/components/Empty/Empty'
import { GameCard } from '@/components/GameCard/GameCard'
import gamesMock from '@/components/GameCardSlider/GameCardSlider.mock'
import { Grid } from '@/components/Grid/Grid'
import { Heading } from '@/components/Heading/Heading'
import highlightMock from '@/components/Highlight/Highlight.mock'
import { Showcase } from '@/components/Showcase/Showcase'
import { StoreLayout } from '@/layouts/StoreLayout'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

export default function Game() {
  return (
    <StoreLayout>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {props.games.length ? (
          <Grid>
            {props.games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={props.recommendedGames}
        highlight={props.recommendedHighlight}
      />
    </StoreLayout>
  )
}
