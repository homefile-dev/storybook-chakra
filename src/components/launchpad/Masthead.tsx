import { Avatar, Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import {Logo, LogoSmall} from '../../assets/images'
import IconMenu from './IconMenu'
import { CustomIcon } from '../icons/CustomIcon'
import { MastheadI } from '../../interfaces/launchpad/Masthead.interface'
import { t } from 'i18next'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const Masthead = ({ avatarUrl = '', handleClick, menuItems, userName }: MastheadI) => {
  const firstName = userName?.split(' ')[0]
  const { width } = useWindowDimensions()
  const isSmallMobile = width < 400
  return (
    <Container minW="container.full">
      <Flex p="1rem" justify="space-between" alignItems="center">
        <Button variant="menuIcon" maxW="fit-content" onClick={handleClick}>
          <Image
            src={isSmallMobile ? LogoSmall : Logo}
            alt="Homefile"
            h="image.logo"
          />
        </Button>
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
            menuItems={menuItems}
          />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Masthead
