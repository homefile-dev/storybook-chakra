import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState, Suspense } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo'

export const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const { t } = useTranslation()
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Box w="container.full">
        <Container size="medium">
          <Logo />
          <Container variant="ghost" centerContent h="4rem">
            <Text variant="title">{t('signup.title')}</Text>
          </Container>
          <Box px={10} mb={6}>
            <Stack spacing={3}>
              <Input placeholder={t('signup.firstName')} />
              <Input placeholder={t('signup.lastName')} />
              <Input placeholder={t('signup.email')} />
              <Text textAlign="center" variant="caption">
                {t('signup.subtitle')}
              </Text>
              <InputGroup>
                <Input
                  placeholder={t('signup.password')}
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement>
                  <IconButton
                    variant="icon"
                    aria-label="Enter password"
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                    onClick={handleClick}
                  >
                    {show ? 'Hide' : 'Show'}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder={t('signup.passwordConfirm')}
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement width="3rem">
                  <IconButton
                    variant="icon"
                    aria-label="Enter password"
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                    onClick={handleClick}
                  >
                    {show ? 'Hide' : 'Show'}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
              <Center px={10} h="4rem">
                <Text textAlign="center" variant="info" w="100%">
                  {t('signup.terms')}
                  <a href="https://">{t('footer.termsLink')}</a>
                </Text>
              </Center>
              <Button>{t('signup.signupBt')}</Button>
            </Stack>
          </Box>
          <Container variant="secondary" centerContent h="10rem">
            <Box w="full" px={10} my="auto">
              <Text mb={4} textAlign="center" variant="body">
                {t('signup.signin')}
              </Text>
              <Button mb={2} variant="secondary">
                {t('signup.signinBt')}
              </Button>
            </Box>
          </Container>
        </Container>
        <Flex
          w="container.footer"
          mx="auto"
          my={4}
          justifyContent="space-between"
        >
          <Text variant="label">{t('footer.copyright')}</Text>
          <Flex gap={2}>
            <Text variant="label">
              <a href="https://">{t('footer.termsLink')}</a>
            </Text>
            <Text variant="label">
              <a href="https://">{t('footer.privacyLink')}</a>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Suspense>
  )
}

export default SignUp
