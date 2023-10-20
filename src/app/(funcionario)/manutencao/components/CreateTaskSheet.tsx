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
import { TaskType } from '@/types/enum/TypeTaskEnum'
import { useState } from 'react'

interface CreateReservationSheetProps {
  token: string
  userId: string
}

export function CreateTaskSheet(props: CreateReservationSheetProps) {
  const [description, setDescription] = useState<string>('')

  const createReservation = async () => {
    const data = {
      description,
      type: TaskType.MAINTENANCE,
      userId: props.userId,
    }

    await api.post('task/create', data, {
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
          <SheetTitle>Cadastrar novo pedido de manutenção</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label>Nome:</Label>
            <Input
              placeholder="Descrição"
              value={String(description)}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button onClick={createReservation}>Cadastrar reserva</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
