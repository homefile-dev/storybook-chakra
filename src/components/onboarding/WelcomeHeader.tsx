import { chakra, Stack, Text } from '@chakra-ui/react'
import { WelcomeI } from '../../interfaces/onboarding/Welcome.interface'

export const WelcomeHeader = ({ description, greeting, name }: WelcomeI) => {
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

export default WelcomeHeader
