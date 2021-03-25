export function date(): string {
  const hoje = new Date()
  const dd = hoje.getDate()
  const mm = hoje.getMonth() + 1
  const yyyy = hoje.getFullYear()
  const hours = hoje.getHours()
  const minutes = hoje.getMinutes()
  const second = hoje.getSeconds()

  return `${dd}-${mm}-${yyyy} ${hours}:${minutes}:${second}`
}
