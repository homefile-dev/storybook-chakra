export const MenuItems = [
  {
    label: 'Edit',
    handleClick: () => {},
  },
]

const url = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

export const HomeCards = [
  {
    active: true,
    address: {
      city: 'San Francisco',
      state: 'CA',
      street: '123 Main St',
      zip: '94101',
    },
    _id: "1",
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
    _id: "2",
    image: null,
    name: 'The Edmunds',
  },
]
