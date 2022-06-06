import { proxy } from 'valtio'

interface FileDetailI {
  addedAt: string
  addedBy: string
  icon: string
  name: string
  _id: string
}

export const fileDetailProxy = proxy<FileDetailI>({
  addedAt: '',
  addedBy: 'AR Lucas',
  icon: '',
  name: '',
  _id: '',
})
