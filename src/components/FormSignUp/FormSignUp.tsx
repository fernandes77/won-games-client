import { Button } from '@/components/Button/Button'
import { TextField } from '@/components/TextField/TextField'
import { IconLock, IconMail, IconUserCircle } from '@tabler/icons-react'
import Link from 'next/link'

export const FormSignUp = () => (
  <div>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<IconUserCircle />}
        className="my-xxs"
      />
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
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<IconLock />}
        className="my-xxs"
      />

      <Button size="lg" fullWidth className="mt-md mx-auto mb-xs">
        Sign up now
      </Button>

      <div className="text-sm text-black text-center">
        Already have an account?{' '}
        <Link
          href="/sign-in"
          className="text-secondary border border-solid border-secondary
          transition-[color,border,0.1s_ease-in-out] hover:text-secondary-dark
          hover:border-b hover:border-solid hover:border-secondary-dark"
        >
          Sign in
        </Link>
      </div>
    </form>
  </div>
)
