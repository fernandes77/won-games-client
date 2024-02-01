import { Heading } from '@/components/Heading/Heading'
import { Logo } from '@/components/Logo/Logo'
import { Children } from '@/types/children'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthLayout({ children }: Children) {
  return (
    <main className="grid grid-cols-1 min-md:grid-cols-[1fr_1fr] h-screen">
      <div
        className="relative pt-xxl pb-lg px-xxl max-md:hidden
        after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0
        after:bg-black after:opacity-85"
      >
        <Image
          src="/img/auth-bg.jpg"
          alt="Won Games Auth Page"
          layout="fill"
          objectFit="cover"
        />
        <div className="text-white grid grid-cols-1 justify-between h-full relative z-base">
          <Link href="/" className="w-fit h-fit">
            <Logo />
          </Link>

          <div>
            <Heading>All your favorite games in one place</Heading>
            <h3 className="text-xxl font-light mt-xxs">
              <strong className="text-primary">WON</strong> is the best and most
              complete gaming platform.
            </h3>
          </div>

          <p className="text-xs text-center self-end">
            Won Games 2024 © Todos os Direitos Reservados
          </p>
        </div>
      </div>

      <div className="bg-white grid items-center justify-center">
        <div className="w-[18.75rem] min-md:w-[22.5rem] [&_.logo]:mx-auto [&_.logo]:mb-xxl">
          <Link href="/">
            <Logo color="black" size="large" />
          </Link>

          {children}
        </div>
      </div>
    </main>
  )
}
