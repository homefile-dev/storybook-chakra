import { ReactElement } from "react"

export interface IRightPanel {
  children: ReactElement | ReactElement[]
  isOpen: boolean
  onClose: () => void
  size?: string
}