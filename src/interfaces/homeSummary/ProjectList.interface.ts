import { IMenuItem } from '../launchpad/IconMenu.interface'

export interface IProjectList {
  handleProjectClick: () => void
  key?: string
  menuItems: IMenuItem[]
  title: string
}
