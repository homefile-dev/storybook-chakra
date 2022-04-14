import { IMenuItem } from "../launchpad/IconMenu.interface";
import { IMyHomeHeader } from "./MyHomesHeader.interface";
import { IHomeCard } from './HomeCard.interface'

export interface IMyHomes extends IMyHomeHeader {
  cardList: IHomeCard[]
  cardMenuItems?: IMenuItem[]
  handleCardClick: (cardId: string | number) => void
  headerMenuItems: IMenuItem[]
}