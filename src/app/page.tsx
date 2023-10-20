import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Hotel } from 'lucide-react'
import Image from 'next/image'
import { LoginClientContainer } from './components/LoginClientContainer'
import { LoginEmployeeContainer } from './components/LoginEmployeeContainer'
import { CreateClientContainer } from './components/CreateClientContainer'

export default function Home() {
  return (
    <div className="flex-1 grid grid-cols-[1fr_1fr] ">
      <Image
        src={
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt="Initial Image"
        width={500}
        height={1000}
        className="w-full h-screen object-cover"
      />
      <div className="flex flex-col items-center justify-center flex-1 gap-11">
        <h1 className="flex flex-row gap-2 ">
          <Hotel /> HotelManeger
        </h1>

        <Tabs defaultValue="client" className="flex flex-col items-center">
          <TabsList className="self-center">
            <TabsTrigger value="client">Login cliente</TabsTrigger>
            <TabsTrigger value="employee">Login funcionario</TabsTrigger>
            <TabsTrigger value="signUp">Cadastro</TabsTrigger>
          </TabsList>
          <TabsContent value="client">
            <LoginClientContainer />
          </TabsContent>
          <TabsContent value="employee">
            <LoginEmployeeContainer />
          </TabsContent>
          <TabsContent value="signUp">
            <CreateClientContainer />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
