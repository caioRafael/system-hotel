import { Title } from '@/components/title'
import Quarto, { roomsList } from '@/types/Quarto'
import Image from 'next/image'
import { BookRoomModal } from './components/bookRoomModal'

interface RoomPageProps {
  params: {
    id: string
  }
}

export default async function RoomPage(props: RoomPageProps) {
  const { params } = props
  const quartoEncontrado = roomsList.find(
    (quarto: Quarto) => quarto.roomNumber === Number(params.id),
  )
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title={`Quarto ${quartoEncontrado?.roomNumber}`} />

      <div className="flex flex-col gap-4 w-full">
        <Image
          src={
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
          alt="quarto"
          width={1000}
          height={1000}
          className="w-full h-[500px] object-cover object-center"
        />

        <h1>Beneficios:</h1>
        <div className="w-full  mx-auto p-4">
          <ul className="list-disc pl-6">
            {quartoEncontrado?.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <h1>Diaria: R$100,00</h1>

        <BookRoomModal />
      </div>
    </div>
  )
}
