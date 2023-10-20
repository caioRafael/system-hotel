export default function formatValueToCurrency(value: number): string {
  const brazilianFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return brazilianFormat.format(value)
}
