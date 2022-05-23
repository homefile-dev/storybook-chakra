import { MenuItemI } from '../launchpad/IconMenu.interface'
import { MyHomeHeaderI } from './MyHomesHeader.interface'
import { HomeCardI } from './HomeCard.interface'

export interface MyHomesFormI {
  _id: string | number
  name: string
}

export interface MyHomesI extends MyHomeHeaderI {
  cardList: HomeCardI[]
  cardMenuItems?: MenuItemI[]
  handleCardClick: (form: MyHomesFormI) => void
  headerMenuItems: MenuItemI[]
}