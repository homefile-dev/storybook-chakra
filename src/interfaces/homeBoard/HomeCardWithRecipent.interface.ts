import { MenuItemI } from "../launchpad/IconMenu.interface"
import { HomeCardI } from "../myHomes/HomeCard.interface"
import { RecipientI } from "../sendCommunication/AddRecipient.interface"

export interface HomeCardWithRecipentI extends HomeCardI {
  handleEdit: (id: string) => void
  menu?: MenuItemI[]
  recipients?: RecipientI[]
}