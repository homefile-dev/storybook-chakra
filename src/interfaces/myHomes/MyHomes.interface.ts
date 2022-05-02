import { IMenuItem } from "../launchpad/IconMenu.interface";
import { IMyHomeHeader } from "./MyHomesHeader.interface";
import { IHomeCard } from './HomeCard.interface'

interface IMyHomesForm {
  _id: string | number
  name: string
}

export interface IMyHomes extends IMyHomeHeader {
  cardList: IHomeCard[]
  cardMenuItems?: IMenuItem[]
  handleCardClick: (form: IMyHomesForm) => void
  headerMenuItems: IMenuItem[]
}