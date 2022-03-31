import {
  Box,
  chakra,
  Container,
  Text,
  Center,
  Button,
  Stack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo'
import ButtonLoader from '../loaders/ButtonLoader'
import { IActivateAccount } from '../../interfaces/ActivateAccount.interface'
import Welcome from '../onboarding/Welcome'
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
          <Welcome
            description={t('validation.instruction')}
            greeting={t('validation.welcome')}
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
                ? t('validation.activateBtShort')
                : t('validation.activateBt')}
            </Button>
          </Center>
          <Text variant="info" mt="8">
            {t('validation.signature')}
          </Text>
        </Box>
        <Container variant="tertiary" mt="8">
          <Center h="12" px="4">
            <Text variant="label">{t('validation.notReply')}</Text>
          </Center>
        </Container>
      </Container>
    </Box>
  )
}

export default ActivateAccount
