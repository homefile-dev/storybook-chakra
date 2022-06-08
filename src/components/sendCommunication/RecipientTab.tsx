import { Box, Button, Center, Flex, IconButton, Stack } from '@chakra-ui/react'
import { t } from 'i18next'
import { AiOutlineMinus } from 'react-icons/ai'
import { BeatLoader } from 'react-spinners'
import { isValidEmail } from '../../helpers/Validations'
import { useAddRecipient } from '../../hooks/sendCommunication/useAddRecipient'
import { RecipientTabI } from '../../interfaces/sendCommunication/AddRecipient.interface'
import { CustomIcon } from '../icons/CustomIcon'
import { TextInput } from '../inputs'
import { RecipientCard } from './RecipientCard'
import { useEffect } from 'react'

export const RecipientTab = ({
  handleAdd,
  handleRemove,
  hasTitle,
  loading,
  recipients: recipientsDB,
}: RecipientTabI) => {
  const {
    email,
    errorMessage,
    handleAddLocal,
    handleChange,
    hasError,
    handleRemoveLocal,
    isUniqueEmail,
    recipients,
    setEmail,
    setHasError,
    setRecipients,
  } = useAddRecipient()

  useEffect(() => {
    setRecipients(recipientsDB || [])
  }, [recipientsDB])

  return (
    <Box m="-0.8125rem">
      <Box bg="container.tertiary" p="base" w="100%">
        <Flex w="100%" gap="base">
          <Box w="20rem">
            <TextInput
              errorMessage={errorMessage || t('forms.errorEmail')}
              handleChange={(event) => handleChange(event)}
              hasError={hasError}
              id="email"
              placeholder={t('addRecipient.placeholder')}
              value={email}
            />
          </Box>
          <Button
            variant="tertiary"
            onClick={() => {
              if (isValidEmail(email) && isUniqueEmail(email)) {
                handleAdd(email)
                handleAddLocal(email)
                setEmail('')
              } else {
                setHasError(true)
              }
            }}
            disabled={!email}
          >
            {t('addRecipient.addBtn')}
          </Button>
        </Flex>
      </Box>
      {loading ? (
        <Center h="full" pb="8rem">
          <BeatLoader color="gray" size={8} />
        </Center>
      ) : (
        <Stack
          bg={recipients?.length ? 'container.neutralBlue' : 'transparent'}
          p="base"
          minH="full"
          w="100%"
          spacing="base"
        >
          {recipients?.map(({ email, firstName, lastName, phone }, index) => (
            <Flex align="center" gap="2" key={email + index}>
              <RecipientCard
                hasTitle={hasTitle}
                recipient={{ email, firstName, lastName, phone }}
              />
              <Center>
                <IconButton
                  w="2rem"
                  h="2rem"
                  aria-label="Delete recipient"
                  variant="iconOutlined"
                  icon={<CustomIcon type={AiOutlineMinus} />}
                  onClick={() => {
                    handleRemove(email)
                    handleRemoveLocal(index)
                  }}
                />
              </Center>
            </Flex>
          ))}
        </Stack>
      )}
    </Box>
  )
}

export default RecipientTab
