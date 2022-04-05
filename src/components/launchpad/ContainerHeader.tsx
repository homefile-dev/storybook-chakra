import { Flex, Text, Image } from '@chakra-ui/react'
import { IContainerHeader } from '../../interfaces/launchpad/ContainerHeader.interface'
import IconMenu from './IconMenu'

export const ContainerHeader = ({ icon, menuItems, title, titleIcon }: IContainerHeader) => (
  <Flex justifyContent="space-between" bg="white" align="center" px="4" py="4">
    <Flex gap="2" w="full">
      <Image src={titleIcon} />
      <Text>{title}</Text>
    </Flex>
    <IconMenu
      icon={icon}
      menuItems={menuItems}
    />
  </Flex>
)

export default ContainerHeader
