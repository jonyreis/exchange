import { IBitcoin, IBritas } from "./types";

let dateNow = ""
let hoje = new Date();
let ontem = new Date(hoje.getTime());
ontem.setDate(hoje.getDate() - 1);
let dd = ontem.getDate();
let mm = ontem.getMonth() + 1;
let yyyy = ontem.getFullYear();
dateNow = `${mm}-${dd}-${yyyy}`

const headURL = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata'
const tailURL = '100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao'
const URL_TO_FETCH = `${headURL}/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dateNow}'&$top=${tailURL}`;

export async function getBritas(setBritas: React.Dispatch<React.SetStateAction<IBritas>>) {
  await fetch(URL_TO_FETCH, {
    method: 'get'
  })
    .then(res => res.json())
    .then(res => setBritas(res.value[0]))
    .catch(function (err) {
      console.error(err);
    });
}

export async function getBitcoin(setBitcoin: React.Dispatch<React.SetStateAction<IBitcoin>>) {
  const URL = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
  await fetch(URL, {
    method: 'get'
  })
    .then(res => res.json())
    .then(res => setBitcoin(res.ticker))
    .catch(function (err) {
      console.error(err);
    });
}
