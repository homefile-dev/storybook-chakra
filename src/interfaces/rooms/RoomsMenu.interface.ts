export interface RoomItemI {
  icon: string
  id: string
  index?: number
  label: string
}

export interface RoomsMenuI {
  rooms: RoomItemI[]
}