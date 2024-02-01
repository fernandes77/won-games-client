import { FormSignUp } from '@/components/FormSignUp/FormSignUp'
import { Heading } from '@/components/Heading/Heading'

export default function SignUp() {
  return (
    <>
      <Heading color="black" lineColor="secondary" lineLeft>
        Create an account
      </Heading>

      <FormSignUp />
    </>
  )
}
