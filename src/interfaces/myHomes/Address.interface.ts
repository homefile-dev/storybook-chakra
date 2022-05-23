import { ChangeEvent } from "react"
import { SectionHeaderI } from '../headers/SectionHeader.inteface'

export interface AddressFormI {
  apartmentNumber: string
  city: string
  obs: string
  street: string
  state: string
  zip: string
}

export interface AddressI extends SectionHeaderI {
  complements: string[]
  counter: number
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddComplements: () => void
  handleDeleteComplements: (complement: string) => void
  inputs: AddressFormI
  isDisabled?: boolean
  isValidated: boolean
}
