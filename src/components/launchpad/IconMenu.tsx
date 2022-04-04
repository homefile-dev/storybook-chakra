import {
  MenuButton,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { IIconMenu } from '../../interfaces/launchpad/IconMenu.interface'

export const IconMenu = ({ icon, menuItems }: IIconMenu) => {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={icon}
        variant="menuIcon"
        w="fit-content"
      />
      <MenuList>
        {menuItems.map(({ label }) => (
          <MenuItem key={label}>{label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default IconMenu
