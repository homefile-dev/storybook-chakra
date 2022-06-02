import { MenuItemI } from '../launchpad/IconMenu.interface'
import { FolderI } from './FolderSharing.interface'

export interface FileI {
  handleClick: (id: string) => void
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
export interface FolderDetailI {
  files: FileI[]
  folder: FolderI
  handleClose: () => void
  handleDelete: (id: string) => void
  handleUpload: (files: FolderFileI[]) => void
  loading?: boolean
  uploading: boolean
}

export interface FolderFileI {
  _id: string
  isNew?: boolean
  isShared?: boolean
  imageUrl: string
  menu?: MenuItemI[]
  name: string
  type: string
  file?: File
  uploaded?: boolean
  updatedAt: string
}

export interface MapFileI {
  files: FolderFileI[] | File[] | FileI[]
  isLocal?: boolean
}
// export interface ReportsI {
//   createdAt: string
//   home: string
//   images: ImageDBI[]
//   needsReview: boolean
//   project: string
//   reviewed: boolean
//   status: string
//   subType: string
//   title: string
//   type: string
//   updatedAt: string
//   _id: string
// }
