import { IDocumentItem } from "../homeSummary/DocumentMenu.interface"
import { IMenuItem } from "../launchpad/IconMenu.interface"

export interface ISendCommunication {
  documentList: IDocumentItem[]
  headerList?: IMenuItem[]
  isDisabled?: boolean
}
