import { Title } from '@/components/title'
import { ReservasContainer } from './components/ReservasContainer'
import { api } from '@/lib/api/api'
import { getUser } from '@/lib/auth'

export default async function Reservas() {
  const { token } = await getUser()
  const response = await api.get('reservation/all')
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title="Reservas" />
      <ReservasContainer reservas={response.data} token={token} />
    </div>
  )
}
