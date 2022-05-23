import { ReactElement } from "react"
import { LeftPanelI } from "./LeftPanel.interface"

export interface RightPanelI extends LeftPanelI {
  size?: string
}