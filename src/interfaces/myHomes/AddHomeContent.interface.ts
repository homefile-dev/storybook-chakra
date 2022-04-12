import { IHomeForm } from './Home.interface'

export interface IAddHomeContent {
  handleCreateHomeClick: (form: IHomeForm) => void
  handleSkipClick: () => void
  isFirstHome?: boolean
  userFirstName?: string
  values?: IHomeForm
}
