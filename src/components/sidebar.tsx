'use client'

import {
  BedSingle,
  Construction,
  Home,
  Landmark,
  Layers,
  Trash,
} from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { usePathname, useRouter } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()
  const currentPage = pathname.split('/')[1]
  const router = useRouter()

  const goToPage = (route: string) => {
    router.push(`/${route}`)
  }

  const routes = [
    {
      name: 'Inicio',
      key: 'inicio',
      route: '',
      icon: <Home />,
    },
    {
      name: 'Quartos',
      key: 'quartos',
      route: 'quartos',
      icon: <Home />,
    },
    {
      name: 'Reservas',
      key: 'reservas',
      route: 'reservas',
      icon: <BedSingle />,
    },
    {
      name: 'Caixa',
      key: 'caixa',
      route: 'caixa',
      icon: <Landmark />,
    },
    {
      name: 'Estoque',
      key: 'estoque',
      route: 'estoque',
      icon: <Layers />,
    },
    {
      name: 'Manutenção',
      key: 'manutencao',
      route: 'manutencao',
      icon: <Construction />,
    },
    {
      name: 'Limpeza',
      key: 'limpeza',
      route: 'limpeza',
      icon: <Trash />,
    },
  ]

  return (
    <aside className="flex flex-col flex-1 px-4 py-10 gap-2 border-r">
      {routes.map((route) => (
        <>
          <Button
            key={route.key}
            variant={currentPage === route.route ? 'default' : 'ghost'}
            className="flex gap-2 justify-start"
            onClick={() => goToPage(route.route)}
          >
            {route.icon}
            {route.name}
          </Button>
          <Separator />
        </>
      ))}
    </aside>
  )
}
