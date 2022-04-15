import { Flex, Text, Image } from '@chakra-ui/react'
import { IContainerHeader } from '../../interfaces/headers/ContainerHeader.interface'
import IconMenu from '../launchpad/IconMenu'

export const ContainerHeader = ({
  icon,
  isThin,
  menuItems,
  title,
  titleIcon,
}: IContainerHeader) => (
  <Flex
    justifyContent="space-between"
    bg="white"
    align="center"
    p={isThin ? '1.5' : '4'}
  >
    <Flex gap="2" w="full">
      {titleIcon && <Image src={titleIcon} />}
      {title && <Text>{title}</Text>}
    </Flex>
    <IconMenu icon={icon} menuItems={menuItems} />
  </Flex>
)

export default ContainerHeader