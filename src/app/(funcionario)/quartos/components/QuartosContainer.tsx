import { AppTable, TableColumn } from '@/components/appTable'
import Quarto from '@/types/Quarto'
import { CreateRoomSheet } from './CreateRoomSheet'

interface QuartoContainerProps {
  quartos: Quarto[]
  token: string
}

export function QuartoContainer(props: QuartoContainerProps) {
  const { quartos, token } = props
  return (
    <>
      <AppTable
        values={quartos}
        columns={columns}
        action={<CreateRoomSheet token={token} />}
      />
      {/* <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col gap-3">
          <SheetHeader>
            <SheetTitle>Detalhe da reserva</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label>Cliente:</Label>
              <strong>{item?.clientName}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <Label>Quarto:</Label>
              <strong>{item?.numRooms}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <Label>Custo total:</Label>
              <strong>
                {formatValueToCurrency(item?.totalCost as number)}
              </strong>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-1">
                <Label>ChekIn:</Label>
                <strong>{formatDate(item?.checkInDate as Date)}</strong>
              </div>

              <div className="flex flex-col gap-1">
                <Label>Quarto:</Label>
                <strong>{formatDate(item?.checkOutDate as Date)}</strong>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet> */}
    </>
  )
}

const columns: TableColumn<Quarto>[] = [
  {
    key: 'roomNumber',
    title: 'Numero',
  },
  {
    key: 'beds',
    title: 'Quantidade de camas',
  },
]
