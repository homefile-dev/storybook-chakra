export interface DocumentItemI {
  onClick: () => void
  icon: string
  active?: boolean
  label: string
}
export interface DocumentListI {
  documents: DocumentItemI[]
  isDisabled?: boolean
  title: string
}
