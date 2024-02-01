import { FormSignIn } from '@/components/FormSignIn/FormSignIn'
import { Heading } from '@/components/Heading/Heading'

export default function SignIn() {
  return (
    <>
      <Heading color="black" lineColor="secondary" lineLeft>
        Sign in
      </Heading>

      <FormSignIn />
    </>
  )
}
