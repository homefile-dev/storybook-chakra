import {
  Avatar,
  Container,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import ImgLogo from '../../assets/images/logo.svg'
import { UserMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import IconMenu from './IconMenu'
import { CustomIcon } from '../icons/CustomIcon'
import { IMasthead } from '../../interfaces/launchpad/Masthead.interface'
import { t } from 'i18next'

export const Masthead = ({ avatarUrl = '', userName }: IMasthead) => {
  const firstName = userName?.split(' ')[0]
  return (
    <Container minW="container.full">
      <Flex p="1rem" justify="space-between" alignItems="center">
        <Image src={ImgLogo} alt="Homefile" h="image.logo" />
        <Flex alignItems="center" gap="4">
          <Text>{`${t('welcome.greeting2')} ${firstName}`}</Text>
          <Avatar
            size="sm"
            name={userName}
            bg="avatar.primary"
            src={avatarUrl}
            fontWeight="bold"
            color="white"
          />
          <IconMenu
            icon={<CustomIcon type={BsChevronDown} />}
            iconOnClose={<CustomIcon type={VscClose} />}
            menuItems={UserMenuItems}
          />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Masthead
