import Entity from './Entity'

export default interface Reserva extends Entity {
  checkInDate: Date
  checkOutDate: Date
  roomId: string
  totalCost: number
  userId: string
}
