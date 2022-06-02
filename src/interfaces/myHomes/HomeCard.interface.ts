interface HomeAddressI {
  city: string
  state: string
  street: string
  zip: string
}

export interface ImageI {
  bucketName: string
  extension: string
  fileName: string
}

export interface HomeCardI {
  address: HomeAddressI
  active?: boolean
  _id: string
  image?: ImageI | null
  name: string
}
