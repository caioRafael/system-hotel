export default function formatDate(checkInDate: Date): string {
  const formatoBrasileiro = new Intl.DateTimeFormat('pt-BR')
  return formatoBrasileiro.format(checkInDate)
}
