import { ISelectItem } from "../inputs/Select.interface"

export interface ICreateDocumentHeader {
  handleDateRange: (date: string) => void
  handleSelectHome?: (form: ISelectItem) => void | null
  homes?: ISelectItem[] | null
  initialHome?: string | null
}
