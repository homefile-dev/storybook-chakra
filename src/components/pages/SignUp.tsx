import { Box, Button, Center, Container, Stack, Text } from '@chakra-ui/react'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo'
import Footer from '../onboarding/Footer'
import { ISignUp } from '../../interfaces/SignUp.interface'
import PageTitle from '../onboarding/PageTitle'
import CardFooter from '../onboarding/CardFooter'
import PasswordInput from '../onboarding/PasswordInput'
import useSignUp from '../../hooks/useSignUp'
import TextInput from '../onboarding/TextInput'
import {
  isEmptyField,
  isValidEmail,
  isValidPassword,
  passwordMatch,
} from '../../helpers/Validations'

export const SignUp = ({
  handleCreateAccount,
  handleSignIn,
  privacyUrl,
  signupError,
  termsUrl,
}: ISignUp) => {
  const { t } = useTranslation()
  const { inputs, handleInputChange, isValidated, setIsValidated } = useSignUp()
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Box w="container.full">
        <Container size="onboarding">
          <Logo />
          <PageTitle title={t('signup.title')} />
          <Box px={['container.sm', 'container.md', 'container.lg']} mb={6}>
            <Stack spacing={3}>
              <TextInput
                errorMessage={t('forms.firstName') + ' ' + t('forms.required')}
                hasError={isValidated && isEmptyField(inputs.firstName)}
                id="firstName"
                placeholder={t('forms.firstName')}
                value={inputs.firstName}
                handleChange={(event) => handleInputChange(event)}
              />
              <TextInput
                errorMessage={t('forms.lastName') + ' ' + t('forms.required')}
                hasError={isValidated && isEmptyField(inputs.lastName)}
                id="lastName"
                placeholder={t('forms.lastName')}
                value={inputs.lastName}
                handleChange={(event) => handleInputChange(event)}
              />
              <TextInput
                errorMessage={
                  isEmptyField(inputs.email)
                    ? t('forms.email') + ' ' + t('forms.required')
                    : signupError
                    ? t('forms.errorEmailExists')
                    : t('forms.errorEmail')
                }
                hasError={
                  isValidated &&
                  (isEmptyField(inputs.email) ||
                    !isValidEmail(inputs.email) ||
                    signupError)
                }
                id="email"
                placeholder={t('forms.email')}
                value={inputs.email}
                handleChange={(event) => handleInputChange(event)}
              />
              <Text textAlign="center" variant="caption">
                {t('signup.subtitle')}
              </Text>
              <PasswordInput
                errorMessage={
                  !isValidPassword(inputs.password)
                    ? t('forms.errorPasswordLength')
                    : t('forms.errorPasswordMatch')
                }
                hasError={
                  isValidated &&
                  (!isValidPassword(inputs.password) ||
                    !passwordMatch(inputs.password, inputs.confirmPassword))
                }
                id="password"
                placeholder={t('forms.password')}
                value={inputs.password}
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
                placeholder={t('forms.passwordConfirm')}
                value={inputs.confirmPassword}
                handleChange={(event) => handleInputChange(event)}
              />
              <Center
                px={['container.sm', 'container.md', 'container.lg']}
                h="4rem"
              >
                <Text textAlign="center" variant="info" w="100%">
                  {t('signup.terms')}
                  <a href={termsUrl}>{t('footer.termsLink')}</a>
                </Text>
              </Center>
              <Button
                onClick={() => {
                  setIsValidated(true)
                  if (
                    !isEmptyField(inputs.firstName) &&
                    !isEmptyField(inputs.lastName) &&
                    isValidEmail(inputs.email) &&
                    isValidPassword(inputs.password) &&
                    passwordMatch(inputs.password, inputs.confirmPassword)
                  )
                    handleCreateAccount(inputs)
                }}
              >
                {t('signup.signupBt')}
              </Button>
            </Stack>
          </Box>
          <CardFooter
            title={t('signup.signin')}
            buttonLabel={t('signup.signinBt')}
            handleButtonClick={handleSignIn}
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
    </Suspense>
  )
}

export default SignUp
