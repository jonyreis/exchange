export function currency(number: number, digits: number) {
  return Number(number).toLocaleString('pt-BR', {
    minimumFractionDigits: digits
  })
}
