export function currency(number: number | string, digits: number) {
  return Number(number).toLocaleString('pt-BR', {
    minimumFractionDigits: digits
  })
}
