import {
  Button,
  chakra,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { t } from 'i18next'
import ImgLogo from '../../../assets/images/logo.svg'
import { FirstHomeHeaderI } from '../../../interfaces/myHomes/FirstHomeHeader.interface'

export const FirstHomeHeader = ({ firstName, handleClick }: FirstHomeHeaderI) => {
  return (
    <Container variant="secondary" p="4">
      <Stack spacing="8rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src={ImgLogo} alt="Homefile" h="image.logo" />
          <Button variant="text" onClick={handleClick}>
            {t('myHomes.firstHome.skipBt')}
          </Button>
        </Flex>
        <Text variant="heading6" as="b" mt="auto">
          {`${t('welcome.greeting2')} ${firstName}, `}
          <chakra.span fontWeight="regular">
            {t('myHomes.firstHome.title')}
          </chakra.span>
        </Text>
      </Stack>
    </Container>
  )
}

export default FirstHomeHeader
