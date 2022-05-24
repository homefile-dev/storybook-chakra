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
import RecipientContent from './RecipientContent'

export const RecipientCard = (recipient: RecipientI) => {
  return (
    <Container p="base">
      <Stack spacing="4">
        <Flex gap="1" w="full" align="center">
          <Image src={Recipient} alt="" w="auto" h="10px" />
          <Text fontSize="xs" textTransform="uppercase">
            {t('addRecipient.title')}
          </Text>
        </Flex>
        <RecipientContent {...recipient} />
      </Stack>
    </Container>
  )
}

export default RecipientCard
