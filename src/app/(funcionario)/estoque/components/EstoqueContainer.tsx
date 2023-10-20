'use client'

import { AppTable, TableColumn } from '@/components/appTable'
import Stock from '@/types/Stock'
import { CreateItemSheet } from './CreateItemSheet'

interface ReservasContainerProps {
  estoque: Stock[]
  token: string
}

export function EstoqueContainer(props: ReservasContainerProps) {
  const { estoque, token } = props

  return (
    <>
      <AppTable
        values={estoque}
        columns={columns}
        action={<CreateItemSheet token={token} />}
      />
    </>
  )
}

const columns: TableColumn<Stock>[] = [
  {
    key: 'name',
    title: 'Nome',
  },
  {
    key: 'quantity',
    title: 'Quantidade',
  },
  {
    key: 'minStockLevel',
    title: 'Quantidade minima',
  },
]
