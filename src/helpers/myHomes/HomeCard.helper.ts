import { MyHomesFormI } from '../../interfaces/myHomes/MyHomes.interface'

export const MenuItems = [
  {
    label: 'Edit',
    handleClick: (form: MyHomesFormI) => form,
  },
]

export const HomeCards = [
  {
    active: true,
    address: {
      city: 'San Francisco',
      state: 'CA',
      street: '123 Main St 123 Main St 123 Main St',
      zip: '94101',
    },
    _id: '1',
    image: {
      bucketName: 'homefile-images',
      extension: 'jpeg',
      fileName: 'test-consult.jpeg-db224d',
    },
    name: 'The Edmunds',
  },
  {
    active: true,
    address: {
      city: 'San Francisco',
      state: 'CA',
      street: '123 Main St',
      zip: '94101',
    },
    _id: '2',
    image: null,
    name: 'The Smiths',
  },
  {
    active: true,
    address: {
      city: 'San Francisco',
      state: 'CA',
      street: '123 Main St',
      zip: '94101',
    },
    _id: '3',
    image: null,
    name: 'The Clarks',
  },
]
