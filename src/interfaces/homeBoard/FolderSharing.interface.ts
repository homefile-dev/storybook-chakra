import { SelectItemI } from "../inputs/Select.interface";
import { MenuItemI } from "../launchpad/IconMenu.interface";

export interface FolderI {
  isNew?: boolean
  subTypes: string[]
  type: string
}

export interface FolderSharingI {
  folders?: FolderI[] | null
  handleFolderClick: (folder: FolderI) => void
  handleSelect: (form: SelectItemI) => void
  initialSelectItem: SelectItemI
  menuItems?: MenuItemI[]
  selectItems: SelectItemI[]
}