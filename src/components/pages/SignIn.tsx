import { Box, Button, Center, Container, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Logo from '../onboarding/Logo'
import Footer from '../onboarding/Footer'
import PageTitle from '../onboarding/PageTitle'
import CardFooter from '../onboarding/CardFooter'
import PasswordInput from '../onboarding/PasswordInput'
import useSignIn from '../../hooks/useSignIn'
import TextInput from '../onboarding/TextInput'
import { isEmptyField } from '../../helpers/Validations'
import { ISignIn } from '../../interfaces/SignIn.interface'
import ButtonLoader from '../loaders/ButtonLoader'

export const SignIn = ({
  isLoading,
  handleForgotPassword,
  handleSignIn,
  handleSignUp,
  loginError,
  termsUrl,
  privacyUrl,
}: ISignIn) => {
  const { t } = useTranslation()
  const { inputs, handleInputChange, isValidated, setIsValidated } = useSignIn()
  return (
    <Box w="container.full">
      <Container size="onboarding">
        <Logo />
        <PageTitle title={t('signin.title')} />
        <Box px={['container.sm', 'container.md', 'container.lg']} mb={6}>
          <Stack spacing={8}>
            <Stack spacing={3}>
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
                value={inputs.email}
                handleChange={(event) => handleInputChange(event)}
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
                value={inputs.password}
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
