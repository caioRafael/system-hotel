import { Title } from '@/components/title'
import { ManutencaoContainer } from './components/ManutencaoContainer'
import { getUser } from '@/lib/auth'
import { api } from '@/lib/api/api'

export default async function Manutencao() {
  const { token, currentUser } = await getUser()
  const response = await api.get(`task/${currentUser.id}/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  // console.log(response.data)
  return (
    <div>
      <Title title="Manutenção" />
      <ManutencaoContainer
        tarefas={response.data}
        token={token}
        userId={currentUser.id}
      />
    </div>
  )
}
