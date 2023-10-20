import { TableColumn } from '@/components/appTable'
import { Title } from '@/components/title'
import { api } from '@/lib/api/api'
import { getUser } from '@/lib/auth'
import Stock from '@/types/Stock'
import { QuartoContainer } from './components/QuartosContainer'

export default async function Rooms() {
  const { token } = await getUser()
  const response = await api.get('room/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title="Quartos" />
      <QuartoContainer quartos={response.data} token={token} />
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
