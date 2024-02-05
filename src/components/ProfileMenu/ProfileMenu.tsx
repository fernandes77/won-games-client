import {
  IconCreditCard,
  IconList,
  IconLogout,
  IconUser
} from '@tabler/icons-react'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProfileMenuLink = ({
  icon,
  label,
  href
}: { href: Url; icon: React.ReactNode; label: string }) => {
  const router = useRouter()

  const cssActive = 'bg-primary text-white'
  return (
    <Link
      href={href}
      className={`bg-white text-black flex items-center py-xs px-sm
      transition-[background,color,0.3s_ease-in-out] hover:bg-primary hover:text-white
      max-md:justify-center max-md:flex-[1]
      ${router.asPath === href ? cssActive : ''}`}
    >
      {icon}
      <span className="ml-xs max-md:hidden">{label}</span>
    </Link>
  )
}

export const ProfileMenu = () => (
  <nav
    className="flex border-b-[1px] border-gray-light min-md:flex-col min-md:[&_a]:border-b-[1px]
    min-md:[&_a]:border-gray-light last:min-md:[&_a]:border-0"
  >
    <ProfileMenuLink
      href="/profile/me"
      icon={<IconUser size={24} />}
      label="My profile"
    />

    <ProfileMenuLink
      href="/profile/cards"
      icon={<IconCreditCard size={24} />}
      label="My cards"
    />

    <ProfileMenuLink
      href="/profile/orders"
      icon={<IconList size={24} />}
      label="My orders"
    />

    <ProfileMenuLink
      href="/logout"
      icon={<IconLogout size={24} />}
      label="Sign out"
    />
  </nav>
)
