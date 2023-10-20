import { Title } from '@/components/title'
import { EstoqueContainer } from './components/EstoqueContainer'
import { getUser } from '@/lib/auth'
import { api } from '@/lib/api/api'

export default async function Estoque() {
  const { token } = await getUser()
  const response = await api.get('item/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log(response.data)
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <Title title="Estoque" />
      <EstoqueContainer estoque={response.data} token={token} />
    </div>
  )
}
