interface IHomeAddress {
  city: string
  state: string
  street: string
  zip: string
}

export interface IImage {
  Location: string
}

export interface IHomeCard {
  address: IHomeAddress
  active: boolean
  _id: string
  image?: IImage | null
  name: string
}
