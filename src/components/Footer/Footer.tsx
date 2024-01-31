import { Heading } from '@/components/Heading/Heading'
import { Logo } from '@/components/Logo/Logo'
import { Children } from '@/types/children'
import Link from 'next/link'

const FooterHeading = ({ children }: Children) => (
  <Heading
    color="black"
    lineColor="secondary"
    lineBottom
    size="sm"
    className="uppercase"
  >
    {children}
  </Heading>
)

const Column = ({ children }: Children) => (
  <div className="text-gray text-sm [&_a]:block [&_span]:block [&_a]:mb-xxs [&_span]:mb-xxs hover:[&_a]:underline">
    {children}
  </div>
)

export const Footer = () => (
  <footer>
    <Logo color="black" />
    <div className="grid grid-cols-2 gap-gutter mt-md min-md:grid-cols-4">
      <Column>
        <FooterHeading>Contact Us</FooterHeading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </Column>

      <Column>
        <FooterHeading>Follow us</FooterHeading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </Column>

      <Column>
        <FooterHeading>Links</FooterHeading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
          <Link href="/games">Store</Link>
          <Link href="/search">Buscar</Link>
        </nav>
      </Column>

      <Column aria-labelledby="footer-contact">
        <FooterHeading>Location</FooterHeading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </Column>
    </div>

    <div className="text-gray text-xs mt-lg mb-md text-center">
      Won Games 2023 © All rights reserved.
    </div>
  </footer>
)
