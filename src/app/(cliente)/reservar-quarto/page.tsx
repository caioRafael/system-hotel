import { DatePickerWithRange } from '@/components/datePiker/datePikerWithRange'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Search } from 'lucide-react'
import { RoomCard } from './components/RoomCard'
import Quarto, { roomsList } from '@/types/Quarto'
import { api } from '@/lib/api/api'
import { getUser } from '@/lib/auth'

export default async function ReservarQuarto() {
  const { token } = await getUser()
  const response = await api.get('room/all', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title="Faça sua reserva" />
      <Card className="w-3/4 self-center">
        <CardContent className="flex flex-row justify-center p-3 gap-3 h-16">
          {/* <DatePickerWithRange /> */}
          <Separator orientation="vertical" />
          <Input placeholder="Quantidade de hospedes" type="number" />
          <Separator orientation="vertical" />
          <Input placeholder="Quantidade de quartos" type="number" />
          <Separator orientation="vertical" />
          <Button>
            <Search />
            Pesquisar
          </Button>
        </CardContent>
      </Card>

      <div className="w-full flex flex-wrap mx-auto gap-3 mt-10">
        {response.data.map((room: Quarto) => (
          <RoomCard key={room.roomNumber} room={room} />
        ))}
      </div>
    </div>
  )
}
