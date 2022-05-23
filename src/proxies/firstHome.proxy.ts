import { proxy } from 'valtio'
import { HomeFormI } from '../interfaces/myHomes/Home.interface'


export const firstHomeProxy = proxy<HomeFormI>({
  apartmentNumber: '',
  city: '',
  name: '',
  state: '',
  obs: '',
  street: '',
  zip: '',
})