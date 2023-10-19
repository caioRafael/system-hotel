import Entity from '@/types/Entity'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { ReactElement } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Menu } from 'lucide-react'

export interface TableColumn<T> {
  key: string
  title: string
  format?: (item: T) => ReactElement | string | undefined
}

export interface MenuOptionsProps {
  key: string
  text: string
  onClick: () => void
}

interface AppTableProps<T extends Entity> {
  columns: TableColumn<T>[]
  values: T[]
  menuOptions?: (item: T) => MenuOptionsProps[]
}

export function AppTable<T extends Entity>(props: AppTableProps<T>) {
  const { columns, values, menuOptions } = props

  const MenuOption = (item: T) => {
    const itens = menuOptions ? menuOptions(item) : []
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {itens.map((item) => (
            <DropdownMenuItem key={item.key} onClick={item.onClick}>
              {item.text}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex flex-row items-center justify-between p-2 w-full">
        <Input placeholder="Pesquisa" className="w-60" />
        <Button>Adicionar</Button>
      </div>
      <div className="w-full p-1 border rounded-xl">
        <Table>
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
                  <>
                    <TableCell key={column.key}>
                      {column.format
                        ? column.format(value[column.key])
                        : value[column.key]}
                    </TableCell>
                  </>
                ))}
                {menuOptions && (
                  <TableCell className="w-10">{MenuOption(value)}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
