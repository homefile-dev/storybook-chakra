import { Flex, Text, Image } from '@chakra-ui/react'
import { ContainerHeaderI } from '../../interfaces/headers/ContainerHeader.interface'
import IconMenu from '../launchpad/IconMenu'

export const ContainerHeader = ({
  icon,
  isThin,
  itemForm,
  menuItems,
  title,
  titleIcon,
}: ContainerHeaderI) => (
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
    {menuItems ? (
      <IconMenu icon={icon} itemForm={itemForm} menuItems={menuItems} />
    ) : (
      <></>
    )}
  </Flex>
)

export default ContainerHeader
