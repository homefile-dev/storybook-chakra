import { IMenuItem } from "../launchpad/IconMenu.interface";
import { IMyHomeHeader } from "./MyHomeHeader.interface";
import { IHomeCard } from './HomeCard.interface'

export interface IMyHome extends IMyHomeHeader {
  cardList: IHomeCard[]
  handleCardClick: (cardId: string | number) => void
  headerMenuItems: IMenuItem[]
}