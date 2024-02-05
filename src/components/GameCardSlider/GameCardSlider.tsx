'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/Carousel/Carousel'
import { GameCard, GameCardProps } from '@/components/GameCard/GameCard'
import { ClassName } from '@/types/class-name'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
} & ClassName

export const GameCardSlider = ({
  items,
  color = 'white',
  className
}: GameCardSliderProps) => (
  <section color={color} className={className}>
    <Carousel className="pr-4">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="min-lg:basis-[30%] min-md:max-lg:basis-[40%]
            max-md:min-sm:basis-[65%] max-sm:basis-[85%]"
            data-testid="game-card-slide"
          >
            <GameCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
)
