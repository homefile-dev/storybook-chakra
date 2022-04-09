import { ReactElement } from "react";

export interface IFooterDrawer {
  children: ReactElement | ReactElement[]
  isOpen: boolean
  onClose: () => void
}