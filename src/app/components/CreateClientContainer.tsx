'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { api } from '@/lib/api/api'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function CreateClientContainer() {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()
  const handleCreateUsuario = async () => {
    setLoading(true)

    if (password !== confirmPassword) {
      toast({
        title: 'Erro',
        description: 'Senhas não conferem',
        variant: 'destructive',
      })
      throw new Error('Senhas não conferem')
    }

    const data = {
      login,
      password,
      role: 'CLIENT',
    }

    const response = await api.post('/auth/register', data)

    if (!response) {
      toast({
        title: 'Erro',
        description: 'Problema na criação do usuário',
        variant: 'destructive',
      })
      throw new Error('Problema na criação do usuário')
    }

    toast({
      title: 'Sucesso!',
      description: 'Usuário criado com sucesso!',
    })

    const handleLogin = await signIn('credentials', {
      login,
      password,
      redirect: false,
    })

    if (handleLogin?.error) {
      setLoading(false)
      return ''
    }

    router.replace('/reservar-quarto')
    setLoading(false)
  }

  return (
    <div className="w-96 h-2/3  flex flex-col gap-3 items-center p-1">
      <strong>Realise seu cadastro</strong>
      <>
        <h1>Usuário</h1>
        <Input
          placeholder="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </>
      <>
        <h1>Senha</h1>
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </>

      <>
        <h1>Confirmar senha</h1>
        <Input
          placeholder="Confirmar senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </>

      <Button onClick={handleCreateUsuario}>
        {loading ? 'Carregando' : 'Realise seu cadastro'}
      </Button>
    </div>
  )
}
