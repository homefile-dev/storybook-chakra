import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { FiEdit2 } from 'react-icons/fi'
import { ImageDefault } from '../../assets/images'
import { HomeCardI } from '../../interfaces/homeBoard/HomeCard.interface'
import { CustomIcon } from '../icons/CustomIcon'
const { REACT_APP_STORAGE_URL: storageUrl } = process.env

export const HomeCard = ({
  city,
  edit = true,
  handleClick,
  handleEditClick,
  imageUrl: image,
  maxW,
  mail,
  name,
  phone,
  streetAddress,
  state,
  zip,
}: HomeCardI) => {
  const imageUrl = `${storageUrl}/${image?.bucketName}/${image?.fileName}.${image?.extension}`
  return (
    <Box onClick={handleClick} w={maxW}>
      <Center h="12rem" bg="container.neutralBlue" overflow="hidden">
        <Image
          src={(image?.bucketName && imageUrl) || ImageDefault}
          alt={`${name} ${t('images.altImage')}`}
          w="full"
          objectFit="cover"
        />
      </Center>
      <Stack px="base" pb="base" pt="2" bg="white" spacing="1">
        <Flex justify="space-between" align="center">
          <Text variant="heading6">{name}</Text>
          {edit && (
            <IconButton
              variant="menuIconWithShadow"
              maxW="fit-content"
              aria-label={''}
              p="1"
              icon={<CustomIcon type={FiEdit2} size="5" />}
              onClick={() => handleEditClick}
            />
          )}
        </Flex>
        <Box>
          <Flex justify="space-between" align="center">
            <Text variant="info">{streetAddress}</Text>
            {mail && <Text variant="email">{mail}</Text>}
          </Flex>
          <Text variant="info" mt="-1.5">
            {`${city} ${state} ${zip}`}
          </Text>
          {phone && (
            <Text variant="info" mt="-1.5">
              {phone}
            </Text>
          )}
        </Box>
      </Stack>
    </Box>
  )
}

export default HomeCard
