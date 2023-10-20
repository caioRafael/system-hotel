'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { api } from '@/lib/api/api'
import { useState } from 'react'

interface CreateReservationSheetProps {
  token: string
}

export function CreateRoomSheet(props: CreateReservationSheetProps) {
  const { token } = props
  const [roomNumber, setRoomNumber] = useState('')
  const [beds, setBeds] = useState(0)
  const [image, setImage] = useState('')

  const createRoom = async () => {
    const data = {
      roomNumber,
      beds,
      photos: [image],
    }

    await api.post('room/create', data, {
      headers: {
        Authorization: `Bearer ${token}`,
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
          <SheetTitle>Cadastrar novo Quarto</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label>Numero:</Label>
            <Input
              placeholder="Numero"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Camas:</Label>
            <Input
              placeholder="Qantidade e camas"
              type="number"
              value={beds}
              onChange={(e) => setBeds(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Imagem:</Label>
            <Input
              placeholder="Imagem"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <Button onClick={createRoom}>Adicionar</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
