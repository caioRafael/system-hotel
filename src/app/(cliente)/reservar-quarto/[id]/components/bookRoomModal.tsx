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
import { useState } from 'react'

export function BookRoomModal() {
  const [days, setDays] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)
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
          <DatePickerWithRange className="w-full" />

          <Label>Valor a pagar:</Label>
          <h1>{days * 100}</h1>
        </div>
        <DialogFooter className="flex gap-3">
          <Button variant={'outline'} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={() => setOpen(false)}>Reservar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
