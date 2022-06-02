import { Image, Stack, Box, Flex, Text, Center } from '@chakra-ui/react'
import { t } from 'i18next'
import ImageDefault from '../../assets/images/image-default.jpg'
import { useImage } from '../../hooks/useImage'
import { HomeCardI } from '../../interfaces/myHomes/HomeCard.interface'
const { REACT_APP_STORAGE_URL: storageUrl } = process.env

export const HomeCard = ({
  address: { city, state, street, zip },
  image,
  name,
}: HomeCardI) => {
  const imageUrl = `${storageUrl}/${image?.bucketName}/${image?.fileName}.${image?.extension}`
  const { isWidthBiggerThanHeight } = useImage(image?.bucketName && imageUrl || '')
  return (
    <>
      <Center h="8rem" bg="container.neutralBlue" overflow="hidden" w="full">
        <Image
          src={(image?.bucketName && imageUrl) || ImageDefault}
          alt={`${name} ${t('images.altImage')}`}
          objectFit="cover"
          minH={isWidthBiggerThanHeight ? '100%' : undefined}
          minW={isWidthBiggerThanHeight ? undefined : '100%'}
        />
      </Center>

      <Stack px="2" my="4">
        <Text textTransform="uppercase">{name}</Text>
        <Box>
          <Text variant="home">{street}</Text>
          <Flex gap="1" mt="-1.5">
            <Text variant="home">{`${city},`}</Text>
            <Text variant="home">{state}</Text>
          </Flex>
          <Text variant="home" mt="-1.5">
            {zip}
          </Text>
        </Box>
      </Stack>
    </>
  )
}

export default HomeCard
