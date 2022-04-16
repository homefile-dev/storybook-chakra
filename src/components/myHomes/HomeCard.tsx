import { Image, Stack, Box, Flex, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import ImageDefault from '../../assets/images/image-default.jpg'
import { IHomeCard } from '../../interfaces/myHomes/HomeCard.interface'

export const HomeCard = ({
  address: { city, state, street, zip },
  image,
  name,
}: IHomeCard) => {
  return (
    <>
      <Box maxH="12rem" overflow="hidden">
        <Image
          src={image?.Location || ImageDefault}
          alt={`${name} ${t('images.altImage')}`}
          objectFit="cover"
          minH='12rem'
        />
      </Box>
      <Stack px="2" my="4">
        <Text textTransform="uppercase">{name}</Text>
        <Box>
          <Text variant="home">{street}</Text>
          <Flex gap="1" mt="-1.5">
            <Text variant="home">{`${city},`}</Text>
            <Text variant="home">{state}</Text>
            <Text variant="home">{zip}</Text>
          </Flex>
        </Box>
      </Stack>
    </>
  )
}

export default HomeCard
