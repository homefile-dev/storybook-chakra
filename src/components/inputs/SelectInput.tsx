import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { CustomIcon } from '../icons/CustomIcon'
import { BsChevronDown } from 'react-icons/bs'
import { SelectI } from '../../interfaces/inputs/Select.interface'
import { useState } from 'react'

export const SelectInput = ({ handleClick, initailValue, items }: SelectI) => {
  const [selectedValue, setSelectedValue] = useState<string>(initailValue)
  return (
    <Menu>
      <MenuButton
        w="10rem"
        bg="white"
        h="input.sm"
        px="2"
        border="1px"
        borderRadius="sm"
        borderColor="input.border"
        _hover={{ borderColor: 'input.borderHover' }}
        _focus={{ borderColor: 'input.borderFocus' }}
      >
        <Flex align="center" gap="4" justify="space-between">
          <Text variant="info">{selectedValue}</Text>
          <CustomIcon type={BsChevronDown} />
        </Flex>
      </MenuButton>
      <MenuList zIndex="dropdown">
        {items?.map((item) => (
          <MenuItem
            key={item._id}
            onClick={() => {
              handleClick(item)
              setSelectedValue(item.name)
            }}
            _hover={{
              bg: 'container.secondary',
            }}
            _focus={{
              bg: 'container.secondary',
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SelectInput
