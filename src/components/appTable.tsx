import Entity from '@/types/Entity'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { ReactElement } from 'react'

export interface TableColumn<T> {
  key: string
  title: string
  format?: (item: T) => ReactElement | string | undefined
}

interface AppTableProps<T extends Entity> {
  columns: TableColumn<T>[]
  values: T[]
}

export function AppTable<T extends Entity>(props: AppTableProps<T>) {
  const { columns, values } = props
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key}>{column.title}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {values.map((value) => (
          <TableRow key={value.id}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column.format
                  ? column.format(value[column.key])
                  : value[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
