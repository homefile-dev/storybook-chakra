import { ChangeEvent } from "react"

export interface IAddressForm {
  address: string
  address1: string
  address2: string
  city: string
  state: string
  zipCode: string
}

export interface IAddress {
  complements: string[]
  counter: number
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddComplements: () => void
  handleDeleteComplements: (complement: string) => void
  inputs: IAddressForm
  isValidated: boolean
}
