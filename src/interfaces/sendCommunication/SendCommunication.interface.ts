import { DocumentItemI } from '../homeSummary/DocumentMenu.interface'
import { MenuItemI } from '../launchpad/IconMenu.interface'

export interface SendCommunicationI {
  documentList: DocumentItemI[]
  headerList?: MenuItemI[]
  isDisabled?: boolean
}
