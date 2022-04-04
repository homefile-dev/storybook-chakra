import { Icon } from '@chakra-ui/react'
import { IIcons } from '../../interfaces/icons/CustomIcon.interface'

export const CustomIcon = ({ color = '', type, size = '5' }: IIcons) => (
  <Icon as={type} w={size} h={size} color={color} />
)
