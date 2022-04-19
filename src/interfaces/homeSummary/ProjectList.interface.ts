import { IMenuItem } from '../launchpad/IconMenu.interface'

export interface IProjectList {
  handleProjectClick: () => void
  menuItems: IMenuItem[]
  title: string
}
