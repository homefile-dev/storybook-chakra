import { IFirstHome } from "./FirstHome.interface"

export interface IFirstHomeContent {
  handleCreateHomeClick: (form: IFirstHome) => void
  handleSkipClick: () => void
  userFirstName: string
}
