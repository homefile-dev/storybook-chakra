import { Flex, Text, Stack, Button } from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { t } from 'i18next'
import { CustomIcon } from '../icons/CustomIcon'
import { IHeader } from '../../interfaces/launchpad/Header.interface'

export const HeaderWithView = ({ firstName, handleViews }: IHeader) => {
  return (
    <Flex justifyContent="space-between" align="center" gap="2" pl="4" py="2">
      <Stack direction={['column', 'row']} spacing="2">
        <Text variant="title" as="b">
          {`${t('welcome.greeting2')} ${firstName},`}
        </Text>
        <Text variant="title">{t('welcome.launchpad')}</Text>
      </Stack>
      <Button
        onClick={handleViews}
        leftIcon={<CustomIcon type={HiOutlinePlus} color="white" size="7" />}
        variant="leftRounded"
        size="md"
      >
        {t('launchpad.viewsBT')}
      </Button>
    </Flex>
  )
}

export const Header = ({ firstName }: IHeader) => {
  return (
    <Flex justifyContent="space-between" align="center" gap="2" pl="4" py="4">
      <Stack direction={['column', 'row']} spacing="2">
        <Text variant="titleBolder">
          {`${t('welcome.greeting2')} ${firstName},`}
        </Text>
        <Text variant="title">{t('welcome.launchpad')}</Text>
      </Stack>
      <></>
    </Flex>
  )
}

export default Header
