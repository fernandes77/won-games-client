import { Heading } from '@/components/Heading/Heading'
import { Children } from '@/types/children'
import {
  IconBrandApple,
  IconBrandUbuntu,
  IconBrandWindows
} from '@tabler/icons-react'

type Platform = 'windows' | 'linux' | 'mac'
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  publisher: string
  platforms: Platform[]
  releaseDate: string
  rating: Rating
  genres: string[]
}

const Label = ({ children }: Children) => (
  <h3 className="text-sm font-light text-white">{children}</h3>
)

const Description = ({ children }: Children) => (
  <p className="text-md font-bold text-white">{children}</p>
)

export const GameDetails = ({
  developer,
  publisher,
  releaseDate,
  platforms,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <IconBrandUbuntu aria-label="Linux" size={18} />,
    mac: <IconBrandApple aria-label="Mac" size={18} />,
    windows: <IconBrandWindows aria-label="Windows" size={18} />
  }

  return (
    <div className="my-sm">
      <Heading lineLeft lineColor="secondary" className="max-sm:hidden">
        Game Details
      </Heading>

      <div
        className="grid gap-xs grid-cols-[repeat(2,1fr)] mt-sm min-md:grid-cols-[repeat(3,1fr)]
        min-lg:grid-cols-[repeat(6,1fr)]"
      >
        <div>
          <Label>Developer</Label>
          <Description>{developer}</Description>
        </div>

        <div>
          <Label>Release Date</Label>
          <Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </Description>
        </div>

        <div>
          <Label>Platforms</Label>
          <div className="flex text-white">
            {platforms.map((icon: Platform) => (
              <span className="mr-xxs" key={icon}>
                {platformIcons[icon]}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Label>Publisher</Label>
          <Description>{publisher}</Description>
        </div>

        <div>
          <Label>Rating</Label>
          <Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </Description>
        </div>

        <div>
          <Label>Genres</Label>
          <Description>{genres.join(' / ')}</Description>
        </div>
      </div>
    </div>
  )
}
