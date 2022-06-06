import { FileI } from './File.interface'
import { FolderI } from './FolderSharing.interface'

export interface FolderDetailI {
  files: FolderFileI[]
  folder: FolderI
  handleClose: () => void
  handleEditFileName: (id: string) => void
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

