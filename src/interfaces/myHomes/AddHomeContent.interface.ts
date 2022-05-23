import { HomeFormI } from './Home.interface'

export interface AddHomeContentI {
  handleCreateHomeClick: (form: HomeFormI) => void
  handleSkipClick: () => void
  isFirstHome?: boolean
  userFirstName?: string
  values?: HomeFormI
}
