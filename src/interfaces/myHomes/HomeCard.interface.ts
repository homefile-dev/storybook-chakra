import { IMenuItem } from "../launchpad/IconMenu.interface"

export interface IHomeCard {
  address: string
  cardMenuItems?: IMenuItem[]
  city: string
  handleCardClick: (cardId: string | number) => void
  id: string | number
  imageUrl: string
  state: string
  title: string
}
