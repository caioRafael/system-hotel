'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Quarto from '@/types/Quarto'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface RoomCardProps {
  room: Quarto
}

export function RoomCard(props: RoomCardProps) {
  const { room } = props
  const router = useRouter()
  const goToPage = (route: string) => {
    router.push(`/reservar-quarto/${route}`)
  }

  return (
    <Card className="flex flex-col justify-between p-0 w-60 min-h-80 overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={room.photos[0] as string}
          alt="image-room"
          width={240}
          height={240}
          className="w-60 h-60"
        />
      </CardHeader>
      <CardContent className="my-2 pb-0">
        <h1>Quarto {room.roomNumber}</h1>
        {/* <h1>{room.amenities.join(', ')}</h1> */}
      </CardContent>
      <CardFooter>
        <Button onClick={() => goToPage(room.id as string)}>Reservar</Button>
      </CardFooter>
    </Card>
  )
}
