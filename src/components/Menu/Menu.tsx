'use client'

import { Button } from '@/components/Button/Button'
import { Logo } from '@/components/Logo/Logo'
import {
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconX
} from '@tabler/icons-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type IconWrapperProps = React.HTMLAttributes<HTMLDivElement>

const IconWrapper = ({ children, className, ...props }: IconWrapperProps) => (
  <div
    className={twMerge('text-white cursor-pointer w-6 h-6', className)}
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
  <a
    className={twMerge(
      'relative text-md mx-sm mt-1 text-white text-center hover:after:absolute hover:after:block hover:after:h-1 hover:after:bg-primary hover:after:animate-underline-grow',
      className
    )}
    {...props}
  >
    {children}
  </a>
)

type MenuProps = { username?: string }

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const transitionUp = `transition-transform ease-in-out duration-300 ${
    isOpen ? 'translate-y-0' : 'translate-y-12'
  }`

  const menuLinkMobileClasses = `text-black font-bold text-xl mb-sm ${transitionUp}`

  return (
    <menu className="flex items-center py-sm relative">
      <IconWrapper
        className="block min-md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <IconMenu2 aria-label="Open Menu" />
      </IconWrapper>

      <div className="max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
        <Logo hideTextOnMobile />
      </div>

      <div className="min-md:block flex flex-col items-center justify-center flex-1 min-md:ml-sm">
        <MenuLink href="#">Home</MenuLink>
        <MenuLink href="#">Explore</MenuLink>
      </div>

      <div className="flex grow justify-end items-center [&>div]:ml-xs">
        <IconWrapper>
          <IconSearch aria-label="Search" />
        </IconWrapper>

        <IconWrapper>
          <IconShoppingCart aria-label="Open Shopping Cart" />
        </IconWrapper>

        {!username && (
          <div>
            <Button className="hidden min-md:block">Sign in</Button>
          </div>
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
          <MenuLink className={menuLinkMobileClasses} href="#">
            Home
          </MenuLink>
          <MenuLink className={menuLinkMobileClasses} href="#">
            Explore
          </MenuLink>

          {!!username && (
            <>
              <MenuLink className={menuLinkMobileClasses} href="#">
                My account
              </MenuLink>
              <MenuLink className={menuLinkMobileClasses} href="#">
                Wishlist
              </MenuLink>
            </>
          )}
        </div>

        {!username && (
          <div
            className={`flex flex-col items-center px-xl pb-xl ${transitionUp}`}
          >
            <Button fullWidth size="lg">
              Log in now
            </Button>
            <span className="block my-xxs text-xs">or</span>
            <a
              className="text-primary border-b-2 border-primary"
              href="#"
              title="Sign Up"
            >
              Sign Up
            </a>
          </div>
        )}
      </nav>
    </menu>
  )
}
