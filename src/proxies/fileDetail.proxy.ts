import { proxy } from 'valtio'

interface FileDetailI {
  addedAt: string
  addedBy: string
  description?: string
  _id: string
  icon: string
  name: string
}

export const fileDetailProxy = proxy<FileDetailI>({
  addedAt: '',
  addedBy: '',
  description: '',
  _id: '',
  icon: '',
  name: '',
})
