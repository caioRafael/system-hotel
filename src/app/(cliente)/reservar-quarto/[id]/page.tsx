import { Title } from '@/components/title'
import Quarto, { roomsList } from '@/types/Quarto'
import Image from 'next/image'
import { BookRoomModal } from './components/bookRoomModal'
import { getUser } from '@/lib/auth'
import { api } from '@/lib/api/api'

interface RoomPageProps {
  params: {
    id: string
  }
}

export default async function RoomPage(props: RoomPageProps) {
  const { params } = props
  const { token, currentUser } = await getUser()
  const response = await api.get<Quarto[]>('room/all', {
    headers: { Authorization: `Bearer ${token}` },
  })
  const quartoEncontrado = response.data.find(
    (quarto: Quarto) => quarto.id === params.id,
  )
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title={`Quarto ${quartoEncontrado?.roomNumber}`} />

      <div className="flex flex-col gap-4 w-full">
        <Image
          src={quartoEncontrado?.photos[0] as string}
          alt="quarto"
          width={1000}
          height={1000}
          className="w-full h-[500px] object-cover object-center"
        />

        <h1>Beneficios:</h1>
        <div className="w-full  mx-auto p-4">
          <ul className="list-disc pl-6">
            {['Wi-Fi', 'TV', 'Ar Condicionado'].map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <h1>Diaria: R$100,00</h1>

        <BookRoomModal
          userId={currentUser.id}
          roomId={params.id}
          token={token}
        />
      </div>
    </div>
  )
}
