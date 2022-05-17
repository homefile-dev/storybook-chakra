import {
  Avatar,
  Container,
  Flex,
  Stack,
  Image,
  Text,
  Box,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { Recipient } from '../../assets/images'
import { RecipientI } from '../../interfaces/sendCommunication/AddRecipient.interface'

export const RecipientCard = (recipient: RecipientI) => {
  const { email, firstName, lastName, phone } = recipient
  return (
    <Container p="base">
      <Stack spacing="4">
        <Flex gap="1" w="full" align="center">
          <Image src={Recipient} alt="" w="auto" h="10px" />
          <Text fontSize="xs" textTransform="uppercase">
            {t('addRecipient.title')}
          </Text>
        </Flex>
        <Flex gap="2" align={firstName ? 'start' : 'center'}>
          <Avatar
            size="sm"
            bg={firstName ? 'avatar.green' : 'avatar.gray'}
            fontWeight="bold"
            color="white"
            name={firstName ? `${firstName} ${lastName}` : ''}
          />
          <Stack w="full" spacing="-1">
            {firstName && <Text fontWeight="medium">{`${firstName} ${lastName}`}</Text>}
            <Flex align="center" justifyContent="space-between">
              {phone ? (
                <Text fontSize="xs">{phone}</Text>
              ) : firstName ? (
                <Box />
              ) : null}
              <Text variant="email">{email}</Text>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  )
}

export default RecipientCard
