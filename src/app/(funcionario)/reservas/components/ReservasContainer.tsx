'use client'

import { AppTable, MenuOptionsProps, TableColumn } from '@/components/appTable'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import Reserva from '@/types/Reserva'
import formatDate from '@/utils/formatDate'
import formatValueToCurrency from '@/utils/formatValueToCurrency'
import { useEffect, useState } from 'react'
import { CreateReservationSheet } from './CreateReservationSheet'
import User from '@/types/User'
import Quarto, { roomsList } from '@/types/Quarto'
import { api } from '@/lib/api/api'

interface ReservasContainerProps {
  reservas: Reserva[]
  token: string
}

export function ReservasContainer(props: ReservasContainerProps) {
  const { reservas, token } = props
  console.log(reservas)
  const [open, setOpen] = useState<boolean>(false)
  const [item, setItem] = useState<Reserva | null>(null)
  const [clients, setClients] = useState<User[]>([])
  const [quartos, setQuartos] = useState<Quarto[]>([])

  useEffect(() => {
    api
      .get('auth/all', {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) =>
        setClients(res.data.filter((user: User) => user.role === 'CLIENT')),
      )

    api
      .get('room/all', {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((room) => setQuartos(room.data))
  }, [props.token])

  const menuOptions = (item: Reserva) => {
    return [
      {
        key: 'detail',
        text: 'Detalhar',
        onClick: () => {
          setOpen(true)
          setItem(item)
        },
      },
    ] as MenuOptionsProps[]
  }

  const columns: TableColumn<Reserva>[] = [
    {
      key: 'userId',
      title: 'Cliente',
      format: (item) =>
        clients.find((client) => client.id === item.userId)?.login,
    },
    {
      key: 'roomId',
      title: 'Quarto',
      format: (item) =>
        quartos.find((room) => room.id === item.roomId)?.roomNumber + '',
    },
    {
      key: 'totalCost',
      title: 'Custo',
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

  return (
    <>
      <AppTable
        values={reservas}
        columns={columns}
        menuOptions={menuOptions}
        action={<CreateReservationSheet token={token} />}
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col gap-3">
          <SheetHeader>
            <SheetTitle>Detalhe da reserva</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label>Cliente:</Label>
              <strong>{item?.userId}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <Label>Quarto:</Label>
              <strong>{item?.roomId}</strong>
            </div>
            <div className="flex flex-col gap-1">
              <Label>Custo total:</Label>
              <strong>
                {formatValueToCurrency(item?.totalCost as number)}
              </strong>
            </div>
            {/* <div className="flex gap-5">
              <div className="flex flex-col gap-1">
                <Label>ChekIn:</Label>
                <strong>{formatDate(item?.checkInDate as Date)}</strong>
              </div>

              <div className="flex flex-col gap-1">
                <Label>Quarto:</Label>
                <strong>{formatDate(item?.checkOutDate as Date)}</strong>
              </div>
            </div> */}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
