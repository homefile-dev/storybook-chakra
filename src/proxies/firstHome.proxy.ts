import { proxy } from 'valtio'
import { IHomeForm } from '../interfaces/myHomes/Home.interface'


export const firstHomeProxy = proxy<IHomeForm>({
  address: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipCode: '',
  projectIdentifier: '',
})