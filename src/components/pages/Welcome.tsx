import {
  Box,
  Container,
  Text,
  Center,
  Button,
  Stack,
  AspectRatio,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Logo from '../onboarding/Logo'
import WelcomeHeader from '../onboarding/WelcomeHeader'
import { IWelcome } from '../../interfaces/pages/Welcome.interface'

export const Welcome = ({ handleClick, name, videoUrl = '' }: IWelcome) => {
  const { t } = useTranslation()
  return (
    <Box w="container.full">
      <Container size="validation">
        <Container variant="secondary">
          <Logo />
        </Container>
        <Text variant="heading" textAlign="center" mt="3rem">
          {t('welcome.title')}
        </Text>
        <Box px={['container.sm', 'container.lg']}>
          <Stack spacing="8">
            <WelcomeHeader
              description={t('welcome.message')}
              greeting={t('welcome.greeting')}
              name={name}
            />
            {videoUrl !== '' && (
              <AspectRatio w="full">
                <iframe
                  title="Welcome Homefile"
                  src={videoUrl}
                  allowFullScreen
                />
              </AspectRatio>
            )}
            <Text variant="info">{t('welcome.message2')}</Text>
            <Text variant="info">{t('welcome.signature')}</Text>
            <Center>
              <Button onClick={handleClick} size="onboarding" mb="4rem">
                {t('welcome.welcomeBt')}
              </Button>
            </Center>
          </Stack>
        </Box>
        <Container variant="tertiary" h="container.xxs" />
      </Container>
    </Box>
  )
}

export default Welcome
