export interface IMenuItem {
  handleClick: () => void
  label: string
}

export interface IIconMenu {
  icon: JSX.Element
  menuItems?: IMenuItem[]
}
