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
import { FiEdit2, FiMoreHorizontal } from 'react-icons/fi'
import { ImageDefault } from '../../assets/images'
import { HomeCardWithRecipentI } from '../../interfaces/homeBoard/HomeCardWithRecipent.interface'
import { CustomIcon } from '../icons/CustomIcon'
import { IconMenu } from '../launchpad'
import RecipientContent from '../sendCommunication/RecipientContent'
const { REACT_APP_STORAGE_URL: storageUrl } = process.env

export const HomeCardWithRecipent = ({
  address: { city, state, street, zip },
  handleEdit,
  image,
  _id,
  menu,
  name,
  recipients,
}: HomeCardWithRecipentI) => {
  const imageUrl = `${storageUrl}/${image?.bucketName}/${image?.fileName}.${image?.extension}`
  return (
    <Container variant="launchpad" maxW="24rem" minW="20rem">
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
            onClick={() => handleEdit(_id)}
          />
        </Flex>
        <Box>
          <Text variant="info">{street}</Text>
          <Text variant="info" mt="-1.5">
            {`${city} ${state} ${zip}`}
          </Text>
        </Box>
      </Stack>
      <Stack p="base" spacing="1">
        {recipients &&
          recipients?.map(({ email, firstName, lastName, phone }) => (
            <Container p="base" key={email}>
              {menu && (
                <Flex justify="space-between" mb="-4" mt="-2">
                  <Box />
                  <IconMenu
                    icon={<CustomIcon type={FiMoreHorizontal} size="7" />}
                    menuItems={menu}
                    itemForm={{
                      _id: email,
                      name: firstName || '',
                    }}
                  />
                </Flex>
              )}
              <RecipientContent
                email={email}
                firstName={firstName}
                lastName={lastName}
                phone={phone}
              />
            </Container>
          ))}
      </Stack>
    </Container>
  )
}

export default HomeCardWithRecipent
