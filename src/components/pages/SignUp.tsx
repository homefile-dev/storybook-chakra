import { Box, Button, Center, Container, Stack, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Logo, Footer, CardFooter, PageTitle } from '../onboarding'
import { ISignUp } from '../../interfaces/pages/SignUp.interface'
import {PasswordInput, TextInput} from '../inputs'
import useSignUp from '../../hooks/useSignUp'
import {
  isEmptyField,
  isValidEmail,
  isValidPassword,
  passwordMatch,
} from '../../helpers/Validations'
import ButtonLoader from '../loaders/ButtonLoader'
import { useEffect } from 'react'

export const SignUp = ({
  isLoading,
  handleCreateAccount,
  handleSignIn,
  privacyUrl,
  signupError,
  termsUrl,
  values = {
    email: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    password: '',
  },
}: ISignUp) => {
  const { t } = useTranslation()
  const {
    inputs,
    handleAutoFill,
    handleInputChange,
    isValidated,
    setIsValidated,
  } = useSignUp()

  useEffect(() => {
    handleAutoFill(values)
  }, [values])

  return (
    <Box w="container.full">
      <Container size="onboarding">
        <Logo />
        <PageTitle title={t('signup.title')} />
        <Box px={['container.sm', 'container.md', 'container.lg']} mb={6}>
          <Stack spacing="input.sm">
            <TextInput
              errorMessage={t('forms.firstName') + ' ' + t('forms.required')}
              hasError={isValidated && isEmptyField(inputs.firstName)}
              id="firstName"
              placeholder={t('forms.firstName')}
              value={values.firstName || inputs.firstName}
              handleChange={(event) => {
                values.firstName = event.target.value
                handleInputChange(event)
              }}
            />
            <TextInput
              errorMessage={t('forms.lastName') + ' ' + t('forms.required')}
              hasError={isValidated && isEmptyField(inputs.lastName)}
              id="lastName"
              placeholder={t('forms.lastName')}
              value={values.lastName || inputs.lastName}
              handleChange={(event) => {
                values.lastName = event.target.value
                handleInputChange(event)
              }}
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
              value={values.email || inputs.email}
              handleChange={(event) => {
                values.email = event.target.value
                handleInputChange(event)
              }}
            />
            <Text textAlign="center" variant="caption">
              {t('signup.subtitle')}
            </Text>
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
              placeholder={t('forms.password')}
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
              placeholder={t('forms.passwordConfirm')}
              value={inputs.confirmPassword || ''}
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
              isLoading={isLoading}
              spinner={<ButtonLoader />}
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
  )
}

export default SignUp
