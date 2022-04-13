import {
  Image,
  Container,
  Skeleton,
  Stack,
  Box,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from "react-icons/fi"
import { useImage } from '../../hooks/useImage'
import { IHomeCard } from '../../interfaces/myHomes/HomeCard.interface'
import ContainerHeader from "../headers/ContainerHeader"
import { CustomIcon } from "../icons/CustomIcon"

export const HomeCard = ({
  address,
  cardMenuItems = [],
  city,
  handleCardClick,
  id,
  imageUrl,
  title,
  state,
}: IHomeCard) => {
  const { hasLoaded } = useImage(imageUrl)
  return (
    <Container>
      <ContainerHeader
        menuItems={cardMenuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="5" />}
        isThin
      />
      <Box as="button" textAlign="left" onClick={() => handleCardClick(id)}>
        {hasLoaded ? (
          <Image src={imageUrl} alt={`${title} ${t('images.altImage')}`} />
        ) : (
          <Skeleton h="6rem" />
        )}
        <Stack px="2" my="4">
          <Text textTransform="uppercase">{title}</Text>
          <Box>
            <Text variant="home">{address}</Text>
            <Flex gap="1" mt="-1.5">
              <Text variant="home">{city}</Text>
              <Text variant="home">{state}</Text>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default HomeCard