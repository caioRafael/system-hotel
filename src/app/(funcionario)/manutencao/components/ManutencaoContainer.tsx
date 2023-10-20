'use client'

import { AppTable, TableColumn } from '@/components/appTable'
import { CreateTaskSheet } from './CreateTaskSheet'
import Task from '@/types/Task'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api/api'
import User from '@/types/User'

interface ReservasContainerProps {
  tarefas: Task[]
  token: string
  userId: string
}

export function ManutencaoContainer(props: ReservasContainerProps) {
  const { tarefas, token, userId } = props
  const [clients, setClients] = useState<User[]>([])

  useEffect(() => {
    api
      .get('auth/all', {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) =>
        setClients(res.data.filter((user: User) => user.role !== 'CLIENT')),
      )
  }, [props.token])

  const columns: TableColumn<Task>[] = [
    {
      key: 'description',
      title: 'Descricao',
    },
    {
      key: 'type',
      title: 'Tipo',
    },
    {
      key: 'userId',
      title: 'usuário',
      format: (item) =>
        clients.find((client) => client?.id === item?.userId)?.login,
    },
  ]

  return (
    <>
      <AppTable
        values={tarefas}
        columns={columns}
        action={<CreateTaskSheet userId={userId} token={token} />}
      />
    </>
  )
}
