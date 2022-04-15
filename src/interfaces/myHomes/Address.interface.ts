import { ChangeEvent } from "react"
import { ISectionHeader } from "../headers/SectionHeader.inteface"

export interface IAddressForm {
  apartmentNumber: string
  city: string
  obs: string
  street: string
  state: string
  zip: string
}

export interface IAddress extends ISectionHeader {
  complements: string[]
  counter: number
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddComplements: () => void
  handleDeleteComplements: (complement: string) => void
  inputs: IAddressForm
  isDisabled?: boolean
  isValidated: boolean
}
