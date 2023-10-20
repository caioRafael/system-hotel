import { Sidebar } from '@/components/sidebar'

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid h-full w-full grid-cols-[16rem_1fr] flex-1">
      <Sidebar />
      {children}
    </div>
  )
}
