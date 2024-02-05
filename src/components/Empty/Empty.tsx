import { Button } from '@/components/Button/Button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

export const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <main className="flex flex-col items-center text-center">
    <img
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      className="max-w-full"
      role="image"
    />

    <h2 className="text-primary text-xxl">{title}</h2>
    <p className="text-white text-lg font-light mb-md">{description}</p>

    {hasLink && (
      <Button as={{ type: 'link', props: { href: '/' } }}>
        Go back to store
      </Button>
    )}
  </main>
)
