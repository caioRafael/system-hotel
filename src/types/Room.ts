import Entity from './Entity'

export default interface Room extends Entity {
  roomNumber: string
  beds: number
  photos: string[]
}
