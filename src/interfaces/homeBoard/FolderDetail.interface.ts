import { FileI } from './File.interface'
import { FolderI } from './FolderSharing.interface'
import { RecipientI } from '../sendCommunication/AddRecipient.interface';
import { ImageDBI } from '../sendCommunication/AddMedia.interface';

export interface FolderDetailI {
  files: FolderFileI[]
  folder: FolderI
  handleAddRecipient: (email: string) => void
  handleClose: () => void
  handleDeleteFile: (id: string) => void
  handleDeleteRecipient: (email: string) => void
  handleEditDescription: (file: FolderFileI) => void
  handleEditFileName: (file: FolderFileI) => void
  handleFileClick: (id: string) => void
  handleUpload: (files: FolderFileI[]) => void
  loading?: boolean
  panelSize?: string
  recipients?: RecipientI[]
  uploading: boolean
}

export interface FolderFileI {
  description?: string
  file?: File
  _id: string
  isNew?: boolean
  isShared?: boolean
  imageUrl: string
  title: string
  type: string
  uploaded?: boolean
  updatedAt: string
}

interface ReportsI {
  createdAt: string
  home: string
  images: ImageDBI[]
  needsReview: boolean
  project: string
  reviewed: boolean
  status: string
  subType: string
  title: string
  type: string
  updatedAt: string
  _id: string
}

export interface MapFileI {
  files: FolderFileI[] | File[] | FileI[] | ReportsI[]
  isLocal?: boolean
}



