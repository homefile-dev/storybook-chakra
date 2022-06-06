export interface MenuItemI {
  handleClick: (form: any) => void
  label: string
}

export interface IconMenuI {
  disabled?: boolean
  icon: JSX.Element
  itemForm?: any
  menuItems?: MenuItemI[]
}
