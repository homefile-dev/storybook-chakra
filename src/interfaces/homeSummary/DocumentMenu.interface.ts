interface IDocumentItem {
  handleClick: () => void
  icon: string
  label: string
}
export interface IDocumentList {
  documents: IDocumentItem[]
  title: string
}
