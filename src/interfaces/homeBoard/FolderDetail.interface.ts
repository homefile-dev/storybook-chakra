import { FileI } from './File.interface'
import { FolderI } from './FolderSharing.interface'
import { RecipientI } from '../sendCommunication/AddRecipient.interface'
import { ImageDBI } from '../sendCommunication/AddMedia.interface'

export interface FolderDetailI {
  files: FolderFileI[]
  folder: FolderI
  handleAddRecipient: (email: string) => void
  handleClose: () => void
  handleDeleteFile: (id: string) => void
  handleDeleteFolder: (id: string) => void
  handleDeleteRecipient: (email: string) => void
  handleEditDescription: (file: FolderFileI) => void
  handleEditFileName: (file: FolderFileI) => void
  handleFileClick: (file: FolderFileI) => void
  handleOpenFile: (file: FolderFileI) => void
  handleUpload: (files: FolderFileI[]) => void
  loading?: boolean
  panelSize?: string
  recipients?: RecipientI[]
  uploading: boolean
}

interface FileDBI {
  _id: string
  fileName: string
  extension: string
  originalName: string
  bucketName: string
  description: string
  collectionName: string
  docId: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface FolderFileI {
  description?: string
  file?: File | FileDBI
  _id: string
  isNew?: boolean
  isShared?: boolean
  imageUrl?: string
  title: string
  type: string
  uploaded?: boolean
  updatedAt: string
}

export interface ReportsI {
  _id: string
  description: string
  user: string
  home: string
  title: string
  report: any[]
  type: string
  subType: string
  needsReview: boolean
  reviewed: boolean
  images: ImageDBI[]
  status: string
  deleted: boolean
  createdAt: string
  updatedAt: string
  __v: number
  file?: FileDBI
}

export interface MapFileI {
  files: FolderFileI[] | File[] | FileI[] | ReportsI[]
  isLocal?: boolean
}
