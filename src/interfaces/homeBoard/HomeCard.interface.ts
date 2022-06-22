import { ImageI } from "../myHomes/HomeCard.interface"

export interface HomeCardI {
  city: string
  edit?: boolean
  handleClick?: () => void
  handleEditClick?: () => void
  imageUrl?: ImageI | null
  mail?: string
  maxW?: string
  name: string
  phone?: string
  streetAddress: string
  state: string
  zip: string
}
