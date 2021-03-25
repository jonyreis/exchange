import React from 'react'

import { IBitcoin, IBritas } from './types'

let dateNow = ''
const hoje = new Date()
const ontem = new Date(hoje.getTime())
ontem.setDate(hoje.getDate() - 1)
const dd = ontem.getDate()
const mm = ontem.getMonth() + 1
const yyyy = ontem.getFullYear()
dateNow = `${mm}-${dd}-${yyyy}`

const headURL = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata'
const tailURL =
  '100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao'
const URL_TO_FETCH = `${headURL}/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dateNow}'&$top=${tailURL}`

export async function getBritas(
  setBritas: React.Dispatch<React.SetStateAction<IBritas>>
): Promise<void> {
  await fetch(URL_TO_FETCH, {
    method: 'get'
  })
    .then(res => res.json())
    .then(res => setBritas(res.value[0]))
    .catch(err => err)
}

export async function getBitcoin(
  setBitcoin: React.Dispatch<React.SetStateAction<IBitcoin>>
): Promise<void> {
  const URL = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
  await fetch(URL, {
    method: 'get'
  })
    .then(res => res.json())
    .then(res => setBitcoin(res.ticker))
    .catch(err => err)
}
