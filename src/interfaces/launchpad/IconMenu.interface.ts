interface IMenuItem {
  label: string
}

export interface IIconMenu {
  icon: JSX.Element
  menuItems: IMenuItem[]
}
