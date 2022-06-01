interface MenuFormI {
  _id: string | number
  name: string
}

export interface MenuItemI {
  handleClick: (form: any) => void
  label: string
}

export interface IconMenuI {
  disabled?: boolean
  icon: JSX.Element
  itemForm?: MenuFormI
  menuItems?: MenuItemI[]
}
