import Entity from '@/types/Entity'

export default interface Task extends Entity {
  description: string
  type: string
  userId: string
}
