import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'
import { t } from 'i18next'
import ImgLogo from '../../assets/images/logo.svg'

export const FirstHomeHeader = () => {
  return (
    <Container variant="secondary" p="4">
      <Stack spacing="8rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src={ImgLogo} alt="Homefile" h="image.logo" />
          <Button variant="text">Skip for Now</Button>
        </Flex>
        <Text variant="heading6" as="b" mt="auto">
          {`${t('welcome.greeting2')} Adam, `}
          <chakra.span fontWeight="regular">
            Let’s add your first home.
          </chakra.span>
        </Text>
      </Stack>
    </Container>
  )
}

export default FirstHomeHeader
