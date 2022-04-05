import {
  Box,
  Container,
  Text,
  Center,
  Button,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Logo from '../onboarding/Logo'
import ButtonLoader from '../loaders/ButtonLoader'
import { IActivateAccount } from '../../interfaces/pages/ActivateAccount.interface'
import WelcomeHeader from '../onboarding/WelcomeHeader'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const ActivateAccount = ({
  name,
  isLoading = false,
  handleActivateBt,
}: IActivateAccount) => {
  const { width } = useWindowDimensions()
  const { t } = useTranslation()
  return (
    <Box w="container.full">
      <Container size="validation">
        <Container variant="secondary">
          <Logo />
        </Container>
        <Box px={['container.sm', 'container.lg']}>
          <WelcomeHeader
            description={t('registration.instruction')}
            greeting={t('welcome.greeting')}
            name={name}
          />
          <Center>
            <Button
              onClick={handleActivateBt}
              isLoading={isLoading}
              spinner={<ButtonLoader />}
              size="onboarding"
            >
              {width < 400
                ? t('registration.activateBtShort')
                : t('registration.activateBt')}
            </Button>
          </Center>
          <Text variant="info" mt="8">
            {t('welcome.signature')}
          </Text>
        </Box>
        <Container variant="tertiary" mt="8">
          <Center h="12" px="4">
            <Text variant="label">{t('registration.notReply')}</Text>
          </Center>
        </Container>
      </Container>
    </Box>
  )
}

export default ActivateAccount
