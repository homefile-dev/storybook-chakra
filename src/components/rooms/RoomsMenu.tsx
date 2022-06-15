import { Box, Button, Text, Flex, Center } from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { CustomIcon } from '../icons/CustomIcon'
import { RoomCard } from './RoomCard'
import { RoomsMenuI } from '../../interfaces/rooms/RoomsMenu.interface'
import { useState } from 'react'

export const RoomsMenu = ({ rooms }: RoomsMenuI) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box
      w={isOpen ? '16rem' : 'container.roomIcon'}
      minW={isOpen ? '16rem' : 'container.roomIcon'}
      transition="all 0.2s ease-in-out"
      bg="white"
    >
      <Box overflow="hidden">
        <Box
          as="button"
          w="full"
          h="container.masthead"
          onClick={() => setIsOpen(!isOpen)}
          transition="all 0.2s ease-in-out"
          bg="button.primary"
          _hover={{ backgroundColor: 'button.primaryHover' }}
          _disabled={{
            filter: 'grayscale(100%)',
            pointerEvents: 'none',
          }}
        >
          <Flex justify="strect" alignItems="center">
            <Center minW="container.roomIcon">
              <CustomIcon type={HiOutlinePlus} size="6" color="white" />
            </Center>
            <Box>
              <Text color="white" textTransform="uppercase">Add room</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box>
        {rooms.map(({ icon, id, label }, index) => {
          return (
            <Box key={id}>
              <RoomCard icon={icon} label={label} />
              {index !== rooms.length - 1 && (
                <Box
                  h="1px"
                  bg="container.primary"
                  marginX={isOpen ? 'base' : '0'}
                />
              )}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
