import { MyHomesFormI } from "../../interfaces/myHomes/MyHomes.interface"

export const MenuItems = [
  {
    label: 'Edit',
    handleClick: (form: MyHomesFormI) => console.log(form),
  },
]

const url =
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'

export const HomeCards = [
  {
    active: true,
    address: {
      city: 'San Francisco',
      state: 'CA',
      street: '123 Main St',
      zip: '94101',
    },
    _id: '1',
    image: { Location: url },
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
