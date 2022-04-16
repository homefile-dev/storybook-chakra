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
      <Box maxH="7rem" overflow="hidden">
        <Image
          src={image?.Location || ImageDefault}
          alt={`${name} ${t('images.altImage')}`}
          objectFit="cover"
          minH="7rem"
        />
      </Box>
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
