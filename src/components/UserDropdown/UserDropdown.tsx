import {
  Dropdown,
  DropdownContent,
  DropdownTrigger
} from '@/components/Dropdown/Dropdown'
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconUserCircle
} from '@tabler/icons-react'
import Link from 'next/link'

export type UserDropdownProps = {
  username: string
}

export const UserDropdown = ({ username }: UserDropdownProps) => {
  const cssLink = `flex items-center no-underline bg-white text-black py-xs px-sm
  transition-[background,color,0.3s_ease-in-out]] hover:bg-primary hover:text-white`

  return (
    <Dropdown>
      <DropdownTrigger className="flex text-white">
        <IconUserCircle size={24} />

        <span className="px-xxs">{username}</span>

        <IconChevronDown size={24} />
      </DropdownTrigger>

      <DropdownContent>
        <nav className="flex flex-col w-64">
          <Link
            href="/profile/me"
            className={`${cssLink} border-b border-gray-light`}
          >
            <IconUserCircle className="w-6 h-6" />
            <span className="ml-xs">My profile</span>
          </Link>

          <Link
            href="/wishlist"
            className={`${cssLink} border-b border-gray-light`}
          >
            <IconHeart className="w-6 h-6" />
            <span className="ml-xs">Wishlist</span>
          </Link>

          <Link href="/logout" className={cssLink}>
            <IconLogout className="w-6 h-6" />
            <span className="ml-xs">Sign out</span>
          </Link>
        </nav>
      </DropdownContent>
    </Dropdown>
  )
}
