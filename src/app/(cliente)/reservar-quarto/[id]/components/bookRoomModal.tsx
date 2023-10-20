'use client'

import { DatePickerWithRange } from '@/components/datePiker/datePikerWithRange'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { api } from '@/lib/api/api'
import { addDays } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

interface BookModalProps {
  userId: string
  roomId: string
  token: string
}

export function BookRoomModal(props: BookModalProps) {
  const { userId, roomId, token } = props
  const [days, setDays] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), days),
  })

  const createReservation = async () => {
    const data = {
      checkInDate: date?.from,
      checkOutDate: date?.to,
      totalCost: days * 100,
      userId,
      roomId,
    }

    await api.post('reservation/create', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Reservar quarto</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h1>Reservar quarto</h1>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <Label>Quantidade de dias:</Label>
          <Input
            placeholder="Informe a quantidade de dias"
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
          <Label>Periodo</Label>
          <DatePickerWithRange date={date} setDate={setDate} />

          <Label>Valor a pagar:</Label>
          <h1>{days * 100}</h1>
        </div>
        <DialogFooter className="flex gap-3">
          <Button variant={'outline'} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              createReservation()
              setOpen(false)
            }}
          >
            Reservar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
