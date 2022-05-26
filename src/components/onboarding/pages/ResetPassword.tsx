import { Box, Button, Text, Container, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Logo, Footer, PageTitle, CardFooter } from '..'
import TextInput from '../../inputs/TextInput'
import { isEmptyField, isValidEmail } from '../../../helpers/Validations'
import ButtonLoader from '../../loaders/ButtonLoader'
import { ResetPasswordI } from '../../../interfaces/pages/ResetPassword.interface'
import useResetPassword from '../../../hooks/useResetPassword'

export const ResetPassword = ({
  isLoading,
  handleReset,
  handleSignIn,
  resetError,
}: ResetPasswordI) => {
  const { t } = useTranslation()
  const { inputs, handleInputChange, isValidated, setIsValidated } =
    useResetPassword()
  return (
    <Box w="container.full">
      <Container size="onboarding">
        <Logo />
        <PageTitle title={t('reset.title')} />
        <Box px={['container.sm', 'container.md', 'container.lg']} mb={6}>
          <Stack spacing={8}>
            <Text textAlign="center" variant="info">
              {t('reset.instruction')}
            </Text>
            <Stack spacing={3}>
              <TextInput
                errorMessage={
                  isEmptyField(inputs.email)
                    ? t('forms.email') + ' ' + t('forms.required')
                    : resetError
                    ? t('forms.errorEmailNotActivated')
                    : t('forms.errorEmail')
                }
                hasError={
                  isValidated &&
                  (resetError ||
                    isEmptyField(inputs.email) ||
                    !isValidEmail(inputs.email))
                }
                id="email"
                placeholder={t('reset.email')}
                value={inputs.email}
                handleChange={(event) => handleInputChange(event)}
              />
            </Stack>
            <Stack spacing={4}>
              <Button
                isLoading={isLoading}
                spinner={<ButtonLoader />}
                onClick={() => {
                  setIsValidated(true)
                  if (
                    !isEmptyField(inputs.email) &&
                    isValidEmail(inputs.email)
                  ) {
                    handleReset(inputs)
                  }
                }}
              >
                {t('reset.resetBt')}
              </Button>
            </Stack>
          </Stack>
        </Box>
        <CardFooter
          buttonLabel={t('reset.signinBt')}
          handleButtonClick={handleSignIn}
        />
      </Container>
      <Footer />
    </Box>
  )
}

export default ResetPassword
