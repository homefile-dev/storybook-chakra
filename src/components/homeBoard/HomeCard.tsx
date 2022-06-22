import {
  Box,
  Center,
  Container,
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
  edit,
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
    <Container variant="launchpad" maxW={maxW} minW="20rem">
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
          <IconButton
            variant="menuIconWithShadow"
            maxW="fit-content"
            aria-label={''}
            p="1"
            icon={<CustomIcon type={FiEdit2} size="5" />}
            onClick={handleEditClick}
          />
        </Flex>
        <Box>
          <Text variant="info">{streetAddress}</Text>
          <Text variant="info" mt="-1.5">
            {`${city} ${state} ${zip}`}
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default HomeCard
