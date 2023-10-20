import Entity from '@/types/Entity'

export default interface User extends Entity {
  login: string
  password: string
  role: string
}
