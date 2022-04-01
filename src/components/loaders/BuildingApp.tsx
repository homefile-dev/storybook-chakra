import { Container, Text, Image, Stack, Circle } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { BeatLoader } from 'react-spinners'
import BuildingImg from '../../assets/images/building.svg'

export const BuildingApp = () => {
  const { t } = useTranslation()
  return (
    <Container maxW="container.xl">
      <Stack p="12" spacing="6" alignItems="center">
        <Circle size="204px" bg="container.secondary">
          <Image src={BuildingImg} alt="Building App" />
        </Circle>
        <Text variant="heading" textAlign="center">
          {t('buildingApp.title')}
        </Text>
        <BeatLoader color="gray" size="8" />
        <Text variant="info" textAlign="center" maxW="container.md">
          {t('buildingApp.subtitle')}
        </Text>
      </Stack>
    </Container>
  )
}

export default BuildingApp
