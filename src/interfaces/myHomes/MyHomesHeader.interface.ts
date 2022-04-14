import { IMenuItem } from '../launchpad/IconMenu.interface'

export interface IMyHomeHeader {
  cardFilters: IMenuItem[]
  handleNewHomeClick: () => void
}
