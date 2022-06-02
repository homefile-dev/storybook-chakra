export interface ImagesI {
  bucketName: string
  description: string
  editing?: boolean
  extension: string
  file?: File
  fileName: string
  _id: string
  imageUrl?: string
  name?: string
  size?: number
  type?: string
  uploaded?: boolean
}

export interface ImageDBI {
  bucketName: string
  description: string
  extension: string
  fileName: string
  _id: string
}

export interface MapImagesI {
  files: ImagesI[] | File[] | ImageDBI[]
  isLocal?: boolean
}

export interface AddMediaI {
  handleDelete: (imageId: string) => void
  handleEdit: (file: ImageDBI) => void
  handleOpen?: (file: ImageDBI) => void
  handleUpload: (images: ImageDBI[]) => void
  images?: ImageDBI[]
  loading?: boolean
  uploading: boolean
}
