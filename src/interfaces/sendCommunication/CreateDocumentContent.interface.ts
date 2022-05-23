import { SelectItemI } from '../../interfaces/inputs/Select.interface'

export interface CreateDocumentContentI {
  handleDateRange?: (date: string) => void
  handleSelectHome?: (form: any) => void
  homes?: SelectItemI[] | null
  initialHome?: string | null
  onCloseButton: () => void
}
