export enum TaskType {
  MAINTENANCE = 'MAINTENANCE',
  CLEANING = 'CLEANING',
}

export const TaskRecord: Record<TaskType, string> = {
  MAINTENANCE: 'Administrativo',
  CLEANING: 'Fiscal',
}
