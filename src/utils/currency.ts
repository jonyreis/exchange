export function currency(number: number, digits: number): string {
  return Number(number).toLocaleString('pt-BR', {
    minimumFractionDigits: digits
  })
}
