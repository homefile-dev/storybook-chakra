export interface IButtonFooter {
  buttonStyle: string
  label: string
  onClick: () => void
}

export interface IThreeButtonsFooter {
  button1: IButtonFooter
  button2: IButtonFooter
  button3: IButtonFooter
}
