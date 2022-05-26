import {
  Box,
  chakra,
  Container,
  Text,
  Image,
  Center,
  Button,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { EmailValidationI } from '../../../interfaces/pages/EmailValidation.interface'
import Logo from '../Logo'
import ConfirmationImg from '../../../assets/images/confirmation.svg'
import ButtonLoader from '../../loaders/ButtonLoader'

export const EmailValidation = ({
  email,
  isLoading = false,
  handleResendBt,
}: EmailValidationI) => {
  const { t } = useTranslation()
  return (
    <Box w="container.full">
      <Container size="validation">
        <Container variant="secondary">
          <Logo />
          <Text
            variant="title"
            textAlign="center"
            px={['container.sm', 'container.xl']}
            pb={6}
            minH="6rem"
          >
            <chakra.span color="font.primary">
              {t('validation.title1')}
            </chakra.span>
            <chakra.span color="font.link">{email}</chakra.span>
            <chakra.span color="font.primary">
              {t('validation.title2')}
            </chakra.span>
          </Text>
          <Center>
            <Image
              src={ConfirmationImg}
              alt="Activate account"
              h={['100px', '145px']}
              w="auto"
            />
          </Center>
        </Container>
        <Text
          variant="info"
          px={['container.md', 'container.lg']}
          py="2rem"
          textAlign="center"
        >
          {t('validation.alert1')}
        </Text>
        <Center>
          <Button
            mb={10}
            mx={4}
            variant="secondary"
            onClick={handleResendBt}
            isLoading={isLoading}
            spinner={<ButtonLoader isOutlined />}
            size="onboarding"
          >
            {t('validation.resendBt')}
          </Button>
        </Center>
      </Container>
    </Box>
  )
}

export default EmailValidation
