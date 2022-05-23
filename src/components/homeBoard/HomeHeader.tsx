import { Text, Flex, Box } from '@chakra-ui/react'
import { t } from 'i18next'
import BackCircleButton from '../buttons/BackCircleButton'

export const HomeHeader = ({ homeName }: { homeName: string }) => {
  return (
    <Flex align="center" gap="1">
      <BackCircleButton handleClick={() => {}} />
      <Box
        borderLeft="solid"
        borderWidth="1px"
        borderColor="divider"
        h="1.75rem"
        mx="4"
      />
      <Text variant="title">{t('myHomes.board.title')}</Text>
      <Text variant="titleBolder">{`${homeName} ${t('myHomes.addHome')}`}</Text>
    </Flex>
  )
}

export default HomeHeader
