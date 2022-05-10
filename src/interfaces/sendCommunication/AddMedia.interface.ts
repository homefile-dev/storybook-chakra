export interface ImagesI {
  description: string
  editing?: boolean
  id: string
  Location: string
  name?: string
  size?: number
  type?: string
  uploaded?: boolean
  file?: File
}

export interface ImageDBI {
  description: string
  id: string
  Location: string
}

export interface MapImagesI {
  files: ImagesI[] | File[] | ImageDBI[]
  isLocal?: boolean
}

export interface AddMediaI {
  handleDelete: (imageId: string) => void
  handleEdit: (file: ImageDBI) => void
  handleUpload: (images: ImageDBI[]) => void
  images?: ImageDBI[]
  loading?: boolean
  uploading: boolean
}
