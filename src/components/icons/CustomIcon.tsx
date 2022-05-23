import { Icon } from '@chakra-ui/react'
import { IconsI } from '../../interfaces/icons/CustomIcon.interface'

export const CustomIcon = ({ color = '', type, size = '5' }: IconsI) => (
  <Icon as={type} w={size} h={size} color={color} />
)
