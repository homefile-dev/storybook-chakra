import {
  MenuButton,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { IconMenuI } from '../../interfaces/launchpad/IconMenu.interface'

export const IconMenu = ({
  disabled = false,
  icon,
  itemForm,
  menuItems,
}: IconMenuI) => {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={icon}
        variant="menuIcon"
        w="fit-content"
        disabled={disabled}
      />
      <MenuList>
        {menuItems?.map(({ handleClick, label }) => (
          <MenuItem
            key={label}
            onClick={() => handleClick(itemForm)}
            _hover={{
              bg: 'container.secondary',
            }}
            _focus={{
              bg: 'container.secondary',
            }}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default IconMenu
