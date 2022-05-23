import { MenuItemI } from '../launchpad/IconMenu.interface'

export interface MyHomeHeaderI {
  cardFilters: MenuItemI[]
  handleNewHomeClick: () => void
}
