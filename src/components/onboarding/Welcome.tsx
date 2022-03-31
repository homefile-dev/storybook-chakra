import { chakra, Stack, Text } from '@chakra-ui/react'
import { IWelcome } from '../../interfaces/onboarding/Welcome.interface'

export const Welcome = ({ description, greeting, name }: IWelcome) => {
  return (
    <Stack spacing={3} my={8}>
      <Text variant="info">
        <chakra.span>{greeting}</chakra.span>
        <chakra.span>{`${name},`}</chakra.span>
      </Text>
      <Text variant="info">{description}</Text>
    </Stack>
  )
}

export default Welcome
