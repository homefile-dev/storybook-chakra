import { Box, Button, Center, Container, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Logo, Footer, PageTitle, CardFooter } from '../onboarding'
import { PasswordInput, TextInput } from '../inputs'
import useSignIn from '../../hooks/useSignIn'
import { isEmptyField } from '../../helpers/Validations'
import { ISignIn } from '../../interfaces/pages/SignIn.interface'
import ButtonLoader from '../loaders/ButtonLoader'
import { useEffect } from 'react'

export const SignIn = ({
  isLoading,
  handleForgotPassword,
  handleSignIn,
  handleSignUp,
  loginError,
  termsUrl,
  privacyUrl,
  values = { email: '', password: '' },
}: ISignIn) => {
  const { t } = useTranslation()
  const {
    inputs,
    handleAutoFill,
    handleInputChange,
    isValidated,
    setIsValidated,
  } = useSignIn()

  useEffect(() => {
    handleAutoFill(values)
  }, [values])

  return (
    <Box w="container.full">
      <Container size="onboarding">
        <Logo />
        <PageTitle title={t('signin.title')} />
        <Box px={['container.sm', 'container.md', 'container.lg']} mb={6}>
          <Stack spacing={8}>
            <Stack spacing="input.sm">
              <TextInput
                errorMessage={
                  loginError
                    ? t('forms.errorLogin')
                    : t('forms.email') + ' ' + t('forms.required')
                }
                hasError={
                  isValidated && (loginError || isEmptyField(inputs.email))
                }
                id="email"
                placeholder={t('forms.email')}
                value={values.email || inputs.email}
                handleChange={(event) => {
                  values.email = event.target.value
                  handleInputChange(event)
                }}
              />
              <PasswordInput
                errorMessage={
                  loginError
                    ? t('forms.errorLogin')
                    : t('forms.password') + ' ' + t('forms.required')
                }
                hasError={
                  isValidated && (loginError || isEmptyField(inputs.password))
                }
                id="password"
                placeholder={t('forms.password')}
                value={values.password || inputs.password}
                handleChange={(event) => {
                  values.password = event.target.value
                  handleInputChange(event)
                }}
              />
            </Stack>
            <Stack spacing={4}>
              <Button
                isLoading={isLoading}
                spinner={<ButtonLoader />}
                onClick={async () => {
                  setIsValidated(true)
                  if (
                    !isEmptyField(inputs.email) &&
                    !isEmptyField(inputs.password)
                  ) {
                    handleSignIn(inputs)
                  }
                }}
              >
                {t('signin.signinBt')}
              </Button>
              <Center>
                <Button onClick={handleForgotPassword} variant="text">
                  {t('signin.forgotBt')}
                </Button>
              </Center>
            </Stack>
          </Stack>
        </Box>
        <CardFooter
          title={t('signin.signup')}
          buttonLabel={t('signin.signupBt')}
          handleButtonClick={handleSignUp}
        />
      </Container>
      <Footer
        copyright={t('footer.copyright')}
        termsText={t('footer.termsLink')}
        termsUrl={termsUrl}
        privacyText={t('footer.privacyLink')}
        privacyUrl={privacyUrl}
      />
    </Box>
  )
}

export default SignIn
