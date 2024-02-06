'use client'

import { Container } from '@/components/Container/Container'
import { ExploreSidebar } from '@/components/ExploreSidebar/ExploreSidebar'
import filterItems from '@/components/ExploreSidebar/ExploreSidebar.mock'
import { GameCard } from '@/components/GameCard/GameCard'
import games from '@/components/GameCardSlider/GameCardSlider.mock'
import { Grid } from '@/components/Grid/Grid'
import { IconArrowDown } from '@tabler/icons-react'

const props = { games, filterItems }

export default function Games() {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Container className="min-md:grid min-md:grid-cols-[16.25rem_1fr] min-md:gap-gutter">
      <ExploreSidebar items={filterItems} onFilter={handleFilter} />

      <section>
        <Grid>
          {games.map((item) => (
            <GameCard key={item.title} {...item} />
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
    </Container>
  )
}
