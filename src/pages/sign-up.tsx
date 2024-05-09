import { FormSignUp } from '@/components/FormSignUp/FormSignUp'
import { Heading } from '@/components/Heading/Heading'
import { AuthLayout } from '@/layouts/AuthLayout'

export default function SignUp() {
  return (
    <AuthLayout>
      <Heading color="black" lineColor="secondary" lineLeft>
        Create an account
      </Heading>

      <FormSignUp />
    </AuthLayout>
  )
}
