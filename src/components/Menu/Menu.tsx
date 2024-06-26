import { Button } from '@/components/Button/Button'
import { CartDropdown } from '@/components/CartDropdown/CartDropdown'
import { CartIcon } from '@/components/CartIcon/CartIcon'
import { Logo } from '@/components/Logo/Logo'
import { UserDropdown } from '@/components/UserDropdown/UserDropdown'
import { cn } from '@/utils/merge-classnames'
import { IconMenu2, IconSearch, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'

type IconWrapperProps = React.HTMLAttributes<HTMLDivElement>

const IconWrapper = ({ children, className, ...props }: IconWrapperProps) => (
  <div
    className={cn('text-white cursor-pointer w-6 h-6', className)}
    {...props}
  >
    {children}
  </div>
)

const MenuLink = ({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href="/"
    className={cn(
      'relative text-md mx-sm mt-1 text-white text-center hover:after:absolute hover:after:block hover:after:h-1 hover:after:bg-primary hover:after:animate-underline-grow',
      className
    )}
    {...props}
  >
    {children}
  </Link>
)

type MenuProps = { username?: string }

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const transitionUp = `transition-transform ease-in-out duration-300 ${
    isOpen ? 'translate-y-0' : 'translate-y-12'
  }`

  const menuLinkMobileClasses = `text-black font-bold text-xl mb-sm ${transitionUp}`

  return (
    <menu className="flex items-center py-sm px-0 relative z-menu">
      <IconWrapper className="min-md:hidden" onClick={() => setIsOpen(true)}>
        <IconMenu2 aria-label="Open Menu" />
      </IconWrapper>

      <div className="max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
        <Link href="/">
          <Logo hideTextOnMobile />
        </Link>
      </div>

      <div className="max-md:hidden min-md:ml-sm">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/games">Explore</MenuLink>
      </div>

      <div className="flex grow justify-end items-center [&>div]:ml-xs">
        <IconWrapper>
          <IconSearch aria-label="Search" />
        </IconWrapper>

        <IconWrapper>
          <CartDropdown className="hidden min-md:block" />

          <Link href="/cart" className="hidden max-md:block">
            <CartIcon />
          </Link>
        </IconWrapper>

        {!username ? (
          <div>
            <Button
              as={{ type: 'link', props: { href: '/sign-in' } }}
              className="hidden min-md:block"
            >
              Sign in
            </Button>
          </div>
        ) : (
          <UserDropdown username={username} />
        )}
      </div>

      <nav
        className={`flex flex-col justify-between bg-white fixed z-menu top-0 bottom-0 left-0 right-0
        h-screen overflow-hidden transition-opacity ease-in-out duration-300
        ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }
        `}
        aria-hidden={!isOpen}
      >
        <IconX
          className="absolute top-0 right-0 m-xs cursor-pointer w-6 h-6"
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />

        <div className="flex flex-col items-center justify-center flex-1 min-md:ml-sm">
          <MenuLink className={menuLinkMobileClasses} href="/">
            Home
          </MenuLink>
          <MenuLink className={menuLinkMobileClasses} href="/games">
            Explore
          </MenuLink>

          {!!username && (
            <>
              <MenuLink className={menuLinkMobileClasses} href="/profile/me">
                My profile
              </MenuLink>
              <MenuLink
                className={menuLinkMobileClasses}
                href="/profile/wishlist"
              >
                Wishlist
              </MenuLink>
            </>
          )}
        </div>

        {!username && (
          <div
            className={`flex flex-col items-center px-xl pb-xl ${transitionUp}`}
          >
            <Button
              as={{ type: 'link', props: { href: '/sign-in' } }}
              fullWidth
              size="lg"
            >
              Sign in
            </Button>
            <span className="block my-xxs text-xs">or</span>
            <Link
              className="text-primary border-b-2 border-primary"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </menu>
  )
}
