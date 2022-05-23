import { ReactElement } from "react"

export interface LeftPanelI {
  children: ReactElement | ReactElement[]
  isOpen: boolean
  onClose: () => void
}