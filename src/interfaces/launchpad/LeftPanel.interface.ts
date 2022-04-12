import { ReactElement } from "react"

export interface ILeftPanel {
  children: ReactElement | ReactElement[]
  isOpen: boolean
  onClose: () => void
}