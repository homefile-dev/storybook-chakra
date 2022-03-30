import { Flex, Text } from '@chakra-ui/react'
import { IFooter } from '../../interfaces/onboarding/Footer.interface'

export const Footer = ({
  copyright,
  termsText,
  termsUrl,
  privacyText,
  privacyUrl,
}: IFooter) => {
  return (
    <Flex
      w={['container.full', 'container.sm', 'container.md']}
      direction={['column', 'row']}
      mx="auto"
      my={4}
      justifyContent={['center', 'space-between']}
      alignItems="center"
    >
      <Text variant="label">{copyright}</Text>
      <Flex gap={2}>
        <Text variant="label">
          <a href={termsUrl}>{termsText}</a>
        </Text>
        <Text variant="label">
          <a href={privacyUrl}>{privacyText}</a>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Footer