'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function LoginEmployeeContainer() {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const handdleSignIn = async () => {
    setLoading(true)
    const result = await signIn('credentials', {
      login,
      password,
      redirect: false,
    })

    if (result?.error) {
      setLoading(false)
      return ''
    }

    router.replace('/reservas')
    setLoading(false)
  }
  return (
    <div className="w-96 h-2/3  flex flex-col gap-3 items-center p-1">
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

      <Button onClick={handdleSignIn}>
        {loading ? 'Carregando' : 'Logar'}
      </Button>
    </div>
  )
}
