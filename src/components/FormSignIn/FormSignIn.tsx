import { Button } from '@/components/Button/Button'
import { TextField } from '@/components/TextField/TextField'
import { IconLock, IconMail } from '@tabler/icons-react'
import Link from 'next/link'

export const FormSignIn = () => (
  <div>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<IconMail />}
        className="my-xxs"
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<IconLock />}
        className="my-xxs"
      />
      <a
        href="#"
        className="block text-sm text-black text-right hover:text-gray-dark"
      >
        Forgot your password?
      </a>

      <Button className="mt-md mx-auto mb-xs" size="lg" fullWidth>
        Sign in now
      </Button>

      <div className="text-sm text-black text-center">
        Don't have an account?{' '}
        <Link
          className="text-secondary border-b-[1px] border-solid border-secondary
          transition-[color,border,0.1s_ease-in-out] hover:text-secondary-dark
          hover:border-b-[1px] hover:border-solid hover:border-secondary-dark"
          href="/sign-up"
        >
          Sign up
        </Link>
      </div>
    </form>
  </div>
)
