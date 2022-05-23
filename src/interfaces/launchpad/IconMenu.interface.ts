interface MenuFormI {
  _id: string | number
  name: string
}

export interface MenuItemI {
  handleClick: (event: any) => void
  label: string
}

export interface IconMenuI {
  icon: JSX.Element
  itemForm?: MenuFormI
  menuItems?: MenuItemI[]
}
