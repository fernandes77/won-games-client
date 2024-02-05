import { Container } from '@/components/Container/Container'
import { Gallery } from '@/components/Gallery/Gallery'
import galleryMock from '@/components/Gallery/Gallery.mock'
import gamesMock from '@/components/GameCardSlider/GameCardSlider.mock'
import {
  GameDetails,
  GameDetailsProps
} from '@/components/GameDetails/GameDetails'
import { GameInfo } from '@/components/GameInfo/GameInfo'
import highlightMock from '@/components/Highlight/Highlight.mock'
import { Showcase } from '@/components/Showcase/Showcase'
import { TextContent } from '@/components/TextContent/TextContent'

const descriptionHTML = `
<img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
<hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


<p class="description__copyrights">
CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
</p>`

const props = {
  cover:
    'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
  gameInfo: {
    title: 'Cyberpunk 2077',
    price: '59.00',
    description:
      'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
  },
  gallery: galleryMock,
  description: descriptionHTML,
  details: {
    developer: 'CD PROJEKT RED',
    releaseDate: '2020-12-10T23:00:00',
    platforms: ['windows'],
    publisher: 'CD PROJEKT RED',
    rating: 'BR18',
    genres: ['Action', 'Role-playing']
  } as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock
}

export default function Game() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.cover})` }}
        role="image"
        aria-label="cover"
        className="absolute top-0 right-0 left-0 h-10 bg-cover bg-[top_center] opacity-40
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

          <section
            className="mb-xl min-md:mb-24 [&>div]:pb-xl [&>div]:border-b-[1px]
          [&>div]:border-[rgba(181,_181,_181,_0.3)] [&>div]:min-md:pb-[7rem]"
          >
            <GameDetails {...props.details} />
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
    </>
  )
}
