import decode from 'jwt-decode'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
// import User from '@/types/User'
import { getServerSession } from 'next-auth'
// import { profileService } from '@/app/(authenticated)/services'
import { redirect } from 'next/navigation'
import { api } from './api/api'
import User from '@/types/User'

export async function getUser() {
  const session = await getServerSession(nextAuthOptions)

  if (!session) redirect('/')

  const decodedToken: any = decode(session.token)

  const users = await api.get('auth/all', {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  })

  const currentUser = users.data.find(
    (user: User) => user.login === decodedToken.sub,
  )

  const user = {
    token: session.token,
    currentUser,
  }

  return user
}
