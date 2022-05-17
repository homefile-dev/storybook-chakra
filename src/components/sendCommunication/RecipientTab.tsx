import { Box, Button, Center, Flex, IconButton, Stack } from '@chakra-ui/react'
import { t } from 'i18next'
import { AiOutlineMinus } from 'react-icons/ai'
import { BeatLoader } from 'react-spinners'
import { isValidEmail } from '../../helpers/Validations'
import { useAddRecipient } from '../../hooks/sendCommunication/useAddRecipient'
import { RecipientTabI } from '../../interfaces/sendCommunication/AddRecipient.interface'
import { CustomIcon } from '../icons/CustomIcon'
import { TextInput } from '../inputs'
import RecipientCard from './RecipientCard'

export const RecipientTab = ({
  handleAdd,
  handleRemove,
  loading,
  recipients,
}: RecipientTabI) => {
  const { email, handleChange, isError, setEmail, setIsError } = useAddRecipient()

  return (
    <Box m="-0.8125rem">
      <Box bg="container.tertiary" p="base" w="100%">
        <Flex w="100%" gap="base">
          <Box w="20rem">
            <TextInput
              errorMessage={t('forms.errorEmail')}
              handleChange={(event) => handleChange(event)}
              hasError={isError}
              id="email"
              placeholder={t('addRecipient.placeholder')}
              value={email}
            />
          </Box>
          <Button
            variant="secondary"
            maxW="fit-content"
            maxH="input.md"
            onClick={() => {
              if (isValidEmail(email)) {
                handleAdd(email)
                setEmail('')
              } else {
                setIsError(true)
              }
            }}
            bg="white"
            disabled={!email}
          >
            {t('addRecipient.addBtn')}
          </Button>
        </Flex>
      </Box>
      {loading && (
        <Center h="8rem">
          <BeatLoader color="gray" size={8} />
        </Center>
      )}
      {recipients && !loading && (
        <Stack
          bg="container.neutralBlue"
          p="base"
          minH="full"
          w="100%"
          spacing="base"
        >
          {recipients.map(({ email, firstName, lastName, phone }) => (
            <Flex align="center" gap="2" key={email}>
              <RecipientCard
                email={email}
                firstName={firstName}
                lastName={lastName}
                phone={phone}
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
