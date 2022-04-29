export interface IFooterButton {
  buttonStyle: string
  label: string
  onClick: () => void
}

export interface IFooterButtons {
  button1: IFooterButton
  button2?: IFooterButton | null
  button3: IFooterButton
}
