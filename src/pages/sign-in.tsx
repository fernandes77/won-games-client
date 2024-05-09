import { FormSignIn } from '@/components/FormSignIn/FormSignIn'
import { Heading } from '@/components/Heading/Heading'
import { AuthLayout } from '@/layouts/AuthLayout'

export default function SignIn() {
  return (
    <AuthLayout>
      <Heading color="black" lineColor="secondary" lineLeft>
        Sign in
      </Heading>

      <FormSignIn />
    </AuthLayout>
  )
}
