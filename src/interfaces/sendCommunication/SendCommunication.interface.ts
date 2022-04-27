import { IDocumentItem } from "../homeSummary/DocumentMenu.interface"
import { IMenuItem } from "../launchpad/IconMenu.interface"

export interface ISendCommunication {
  headerList?: IMenuItem[]
  documentList: IDocumentItem[]
}
