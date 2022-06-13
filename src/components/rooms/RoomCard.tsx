import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi';
import { CustomIcon } from '../icons/CustomIcon';

interface RoomCardI {
  hasTopBorder?: boolean
  icon: string
  label: string
}
export const RoomCard = ({ hasTopBorder, icon, label }: RoomCardI) => {
  return (
    <Box
      as="button"
      py="1.25rem"
      px="base"
      borderColor="input.border"
      borderTop={hasTopBorder ? '1px solid' : ''}
      borderBottom="1px solid"
      _active={{ backgroundColor: 'button.tertiaryHover' }}
      _hover={{ backgroundColor: 'button.secondaryHover' }}
      _disabled={{
        filter: 'grayscale(100%)',
        pointerEvents: 'none',
      }}
    >
      <Flex justify="space-between" alignItems="center">
        <Flex gap="4" w="full">
          {icon && <Image src={icon} alt={label} w="24px" h="auto" />}
          <Text>{label}</Text>
        </Flex>
        <CustomIcon type={HiOutlinePlus} size="6" />
      </Flex>
    </Box>
  )
}
