import { create } from "zustand"
import axios from "axios"
import { CryptoCurrenciesResponseSchema } from "./schemas/crypto-schema"

async function getCryptos(){
    const url = import.meta.env.VITE_URL_GET_CRYPTOS
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if(result.success){
        return result.data
    }
}

export const useCryptoStore = create(() => ({
    fetchCryptos: async () => {
       const cryptoCurrencies = await getCryptos()
       console.log(cryptoCurrencies)
    }
})) 