import { Flex, Text } from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { IIconAndText } from '../../interfaces/buttons/IconAndText.interface'
import { CustomIcon } from '../icons/CustomIcon'

export const IconAndText = ({ icon = HiOutlinePlus, title }: IIconAndText) => {
  return (
    <Flex alignItems="center" gap="4">
      <CustomIcon type={icon} color="white" size="7" />
      <Text color="white">{title}</Text>
    </Flex>
  )
}
