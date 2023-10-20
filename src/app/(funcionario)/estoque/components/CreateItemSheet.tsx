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

export function CreateItemSheet(props: CreateReservationSheetProps) {
  const [name, setName] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(10)
  const [minStockLevel, setMinStockLevel] = useState<number>(1)

  const createReservation = async () => {
    const data = {
      name,
      quantity,
      minStockLevel,
    }

    await api.post('item/create', data, {
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
          <SheetTitle>Cadastrar novo item no Estoque</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label>Nome:</Label>
            <Input
              placeholder="Nome"
              value={String(name)}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label>Quantidade:</Label>
            <Input
              placeholder="Quantidade"
              type="number"
              value={String(quantity)}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Nivel minimo:</Label>
            <Input
              placeholder="Minimo"
              type="number"
              value={String(minStockLevel)}
              onChange={(e) => setMinStockLevel(Number(e.target.value))}
            />
          </div>

          <Button onClick={createReservation}>Cadastrar reserva</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
