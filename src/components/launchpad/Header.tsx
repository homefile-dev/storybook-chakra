import { Flex, Text, Stack, Button } from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { t } from 'i18next'
import { CustomIcon } from '../icons/CustomIcon'
import { useState } from 'react'
import { IHeader } from '../../interfaces/launchpad/Header.interface'

export const Header = ({ firstName, handleViews }: IHeader) => {
  const [isOver, setIsOver] = useState(false)
  return (
    <Flex justifyContent="space-between" align="center" gap="2" pl="4" py="2">
      <Stack direction={['column', 'row']} spacing="2">
        <Text variant="title" as="b">
          {`${t('welcome.greeting2')} ${firstName},`}
        </Text>
        <Text variant="title">{t('welcome.launchpad')}</Text>
      </Stack>
      <Button
        onMouseOver={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
        onClick={handleViews}
        leftIcon={<CustomIcon type={HiOutlinePlus} color="white" size="7" />}
        variant="leftRounded"
      >
        {isOver ? t('launchpad.viewsBT') : ''}
      </Button>
    </Flex>
  )
}

export default Header