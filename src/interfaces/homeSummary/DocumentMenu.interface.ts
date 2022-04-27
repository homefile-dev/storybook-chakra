import { ReactElement } from "react"

export interface IDocumentItem {
  onClick: () => void
  icon: string
  active?: boolean
  label: string
}
export interface IDocumentList {
  documents: IDocumentItem[]
  title: string
}
