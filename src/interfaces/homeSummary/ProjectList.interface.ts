import { MenuItemI } from '../launchpad/IconMenu.interface'

export interface IProjectList {
  handleProjectClick: () => void
  menuItems: MenuItemI[]
  title: string
}
