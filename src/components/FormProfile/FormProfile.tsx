import { Button } from '@/components/Button/Button'
import { Heading } from '@/components/Heading/Heading'
import { TextField } from '@/components/TextField/TextField'

export const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="sm">
      My profile
    </Heading>

    <form className="max-w-full grid gap-xs min-md:grid-cols-[1fr_1fr] min-md:gap-md">
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue="johndoe@gmail.com"
        label="E-mail"
        disabled
      />

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button
        size="lg"
        className="mt-xxl min-md:col-[2] min-md:justify-self-end min-md:mt-0"
      >
        Save
      </Button>
    </form>
  </>
)
