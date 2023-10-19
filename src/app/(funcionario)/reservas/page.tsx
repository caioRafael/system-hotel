import { AppTable, TableColumn } from '@/components/appTable'
import { Title } from '@/components/title'
import Reserva, { reservations } from '@/types/Reserva'
import formatDate from '@/utils/formatDate'

export default function Reservas() {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title="Reservas" />
      <AppTable values={reservations} columns={columns} />
    </div>
  )
}

const columns: TableColumn<Reserva>[] = [
  {
    key: 'clientName',
    title: 'Cliente',
  },
  {
    key: 'numRooms',
    title: 'Quarto',
  },
  {
    key: 'checkInDate',
    title: 'ChekIn',
    format: (item) => formatDate(item.checkInDate),
  },
  {
    key: 'checkOutDate',
    title: 'CheckOut',
    format: (item) => formatDate(item.checkOutDate),
  },
]
