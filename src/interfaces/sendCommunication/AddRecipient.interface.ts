export interface RecipientI {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
}

export interface RecipientTabI {
  handleAdd: (email: string) => void
  handleRemove: (email: string) => void
  loading: boolean
  recipients?: RecipientI[]
}
