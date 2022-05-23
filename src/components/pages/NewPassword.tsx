import { Box, Button, Text, Container, Stack, chakra } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Logo, Footer } from '../onboarding'
import { isValidPassword, passwordMatch } from '../../helpers/Validations'
import ButtonLoader from '../loaders/ButtonLoader'
import useNewPassword from '../../hooks/useNewPassword'
import { NewPasswordI } from '../../interfaces/pages/NewPassword.interface'
import { PasswordInput } from '../inputs'

export const NewPassword = ({ isLoading, handleReset, userEmail }: NewPasswordI) => {
  const { t } = useTranslation()
  const { inputs, handleInputChange, isValidated, setIsValidated } =
    useNewPassword()
  return (
    <Box w="container.full">
      <Container size="onboarding">
        <Logo />
        <Container variant="ghost" mt={4} mb={6}>
          <Text
            variant="title"
            textAlign="center"
            px={[10, 0]}
            noOfLines={[2, 1]}
          >
            <chakra.span color="font.primary">
              {t('welcome.greeting2')}
            </chakra.span>
            <chakra.span color="font.link">{userEmail}</chakra.span>
            <chakra.span color="font.primary">,</chakra.span>
          </Text>
        </Container>
        <Box
          px={['container.sm', 'container.md', 'container.lg']}
          pb="container.lg"
          mb={6}
        >
          <Stack spacing={8}>
            <Text textAlign="center" variant="info">
              {t('newPassword.title')}
            </Text>
            <Stack spacing={3}>
              <PasswordInput
                errorMessage={
                  !isValidPassword(inputs.password as string)
                    ? t('forms.errorPasswordLength')
                    : t('forms.errorPasswordMatch')
                }
                hasError={
                  isValidated &&
                  (!isValidPassword(inputs.password) ||
                    !passwordMatch(inputs.password, inputs.confirmPassword))
                }
                id="password"
                placeholder={t('newPassword.create')}
                value={inputs.password || ''}
                handleChange={(event) => handleInputChange(event)}
              />
              <PasswordInput
                errorMessage={
                  !isValidPassword(inputs.confirmPassword)
                    ? t('forms.errorPasswordLength')
                    : t('forms.errorPasswordMatch')
                }
                hasError={
                  isValidated &&
                  (!isValidPassword(inputs.confirmPassword) ||
                    !passwordMatch(inputs.password, inputs.confirmPassword))
                }
                id="confirmPassword"
                placeholder={t('newPassword.confirm')}
                value={inputs.confirmPassword || ''}
                handleChange={(event) => handleInputChange(event)}
              />
            </Stack>
            <Button
              isLoading={isLoading}
              spinner={<ButtonLoader />}
              onClick={() => {
                setIsValidated(true)
                if (
                  isValidPassword(inputs.password) &&
                  passwordMatch(inputs.password, inputs.confirmPassword)
                ) {
                  handleReset(inputs)
                }
              }}
            >
              {t('reset.resetBt')}
            </Button>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default NewPassword
