import { ImageDBI } from './AddMedia.interface'

interface FormI {
  name: string
  description: string
  type: string
  value: any
}

interface UserI {
  email?: string
  name?: string
  phone?: string
}

interface CompanyI {
  address?: string
  facebook?: string
  logoUrl?: string
  name?: string
  phone?: string
  website?: string
}

export interface DocumentPreviewI {
  companyInfo?: CompanyI
  date: string
  document: string
  form: FormI[]
  handleClose: () => void
  handleSend: () => void
  home: string
  images?: ImageDBI[]
  loading?: boolean
  userInfo?: UserI
}