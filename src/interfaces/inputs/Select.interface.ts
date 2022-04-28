export interface ISelectItem {
  name: string
  _id: string
}

export interface ISelect {
  handleClick: (form: ISelectItem) => void
  initailValue: string
  items: ISelectItem[]
}
