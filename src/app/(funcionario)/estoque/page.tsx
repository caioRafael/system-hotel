import { AppTable, TableColumn } from '@/components/appTable'
import { Title } from '@/components/title'
import Stock, { stockData } from '@/types/Stock'
import formatDate from '@/utils/formatDate'

export default function Estoque() {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title="Estoque" />
      <AppTable values={stockData} columns={columns} />
    </div>
  )
}

const columns: TableColumn<Stock>[] = [
  {
    key: 'itemName',
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
