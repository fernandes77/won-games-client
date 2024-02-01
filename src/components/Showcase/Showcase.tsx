import { Container } from '@/components/Container/Container'
import { GameCardProps } from '@/components/GameCard/GameCard'
import { GameCardSlider } from '@/components/GameCardSlider/GameCardSlider'
import { Heading } from '@/components/Heading/Heading'
import { Highlight, HighlightProps } from '@/components/Highlight/Highlight'

type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'white' | 'black'
}

export const Showcase = ({ title, highlight, games, color }: ShowcaseProps) => (
  <Container as="section" className="mb-[5rem]">
    {!!title && (
      <Heading lineLeft lineColor="secondary" color={color} className="mb-md">
        {title}
      </Heading>
    )}
    {!!highlight && (
      <Highlight
        className="mb-md max-md:-mr-half-gutter max-md:-ml-half-gutter"
        {...highlight}
      />
    )}
    {!!games && (
      <GameCardSlider
        className="mb-md max-huge:-mr-half-gutter"
        items={games}
      />
    )}
  </Container>
)
