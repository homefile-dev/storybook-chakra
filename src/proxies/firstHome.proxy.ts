import { proxy } from 'valtio'
import { IFirstHome } from '../interfaces/myHomes/FirstHome.interface'


export const firstHomeProxy = proxy<IFirstHome>({
  address:  '',
  address1: '',
  address2: '',
  city:  '',
  state: '',
  zipCode: '',
  projectIdentifier: '',
  relationship: ''
})