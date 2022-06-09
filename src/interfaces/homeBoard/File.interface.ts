import { MenuItemI } from "../launchpad/IconMenu.interface"

export interface FileDetailI {
  handleAddRecipient: (email: string) => void
  handleEditDescription: (id: string) => void
  handleEditFileName: (id: string) => void
  handleDeleteRecipient: (email: string) => void
}

export interface FileI {
  handleClick: (id: string) => void
  handleEditFileName: (id: string) => void
  isNew?: boolean
  isShared?: boolean
  menu: MenuItemI[]
  title: string
  type: string
  updatedAt: string
  uploaded?: boolean
  uploading?: boolean
  _id: string
}
