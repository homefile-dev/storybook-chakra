import { proxy } from 'valtio'
import { IHomeForm } from '../interfaces/myHomes/Home.interface'


export const firstHomeProxy = proxy<IHomeForm>({
  apartmentNumber: '',
  city: '',
  name: '',
  state: '',
  obs: '',
  street: '',
  zip: '',
})