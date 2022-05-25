import { MenuItemI } from './IconMenu.interface'

export interface MastheadI {
  avatarUrl?: string
  handleClick?: () => void
  menuItems: MenuItemI[]
  userName: string
}
