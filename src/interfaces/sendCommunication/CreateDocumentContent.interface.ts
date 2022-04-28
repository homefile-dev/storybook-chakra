import { ISelectItem } from '../../interfaces/inputs/Select.interface'

export interface ICreateDocumentContent {
  handleDateRange?: (date: string) => void
  handleSelectHome?: (form: any) => void
  homes?: ISelectItem[] | null
  initialHome?: string | null
  onCloseButton: () => void
}
