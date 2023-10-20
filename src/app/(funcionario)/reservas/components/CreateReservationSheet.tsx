'use client'

import { DatePickerWithRange } from '@/components/datePiker/datePikerWithRange'
import { Button } from '@/components/ui/button'
import { DatePickerDemo } from '@/components/ui/datePicker'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { api } from '@/lib/api/api'
import Quarto from '@/types/Quarto'
import User from '@/types/User'
import { addDays } from 'date-fns'
import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'

interface CreateReservationSheetProps {
  token: string
}

export function CreateReservationSheet(props: CreateReservationSheetProps) {
  const [clients, setClients] = useState<User[]>([])
  const [quartos, setQuartos] = useState<Quarto[]>([])
  const [clientId, setCLientID] = useState<string>('')
  const [roomId, setRoomID] = useState<string>('')
  const [days, setDays] = useState<number>(1)
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), days),
  })
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

  const createReservation = async () => {
    const data = {
      checkInDate: date?.from,
      checkOutDate: date?.to,
      totalCost: days * 100,
      userId: clientId,
      roomId,
    }

    await api.post('reservation/create', data, {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Adicionar</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cadastrar nova reserva</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label>Cliente:</Label>
            <Select value={clientId} onValueChange={(id) => setCLientID(id)}>
              <SelectTrigger>
                <SelectValue placeholder="Clientes" />
              </SelectTrigger>
              <SelectContent>
                {clients.map((c) => (
                  <SelectItem value={String(c.id)} key={c.id}>
                    {c.login}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <Label>Quarto:</Label>
            <Select value={roomId} onValueChange={(id) => setRoomID(id)}>
              <SelectTrigger>
                <SelectValue placeholder="Quarto" />
              </SelectTrigger>
              <SelectContent>
                {quartos.map((c) => (
                  <SelectItem value={String(c.id)} key={c.id}>
                    {c.roomNumber}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label>Dias:</Label>
            <Input
              placeholder="Dias"
              type="number"
              value={String(days)}
              onChange={(e) => setDays(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>ChekIn e CheckOut:</Label>
            <DatePickerWithRange date={date} setDate={setDate} />
          </div>

          <Button onClick={createReservation}>Cadastrar reserva</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
