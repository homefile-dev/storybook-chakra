import { Box, Flex, Image, Text, Center } from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'

interface RoomCardI {
  handleDragDrop?: (e: React.DragEvent<HTMLDivElement>) => void
  icon: string
  label: string
}
export const RoomCard = ({ icon, label }: RoomCardI) => {
  return (
    <Box draggable overflow="hidden">
      <Box
        w="full"
        as="button"
        h="3.2rem"
        bg="white"
        transition="all 0.2s ease-in-out"
        _active={{ backgroundColor: 'button.tertiaryHover' }}
        _hover={{ backgroundColor: 'button.roomHover' }}
        _disabled={{
          filter: 'grayscale(100%)',
          pointerEvents: 'none',
        }}
      >
        <Flex justify="start" alignItems="center">
          <Center minW="container.roomIcon">
            {icon && <Image src={icon} alt={label} w="24px" h="auto" />}
          </Center>
          <Box flex="1">
            <Text textAlign="left" variant="caption">
              {label}
            </Text>
          </Box>
          <Center w="container.roomIcon">
            <CustomIcon type={FiMenu} color="button.icon" />
          </Center>
        </Flex>
      </Box>
    </Box>
  )
}
