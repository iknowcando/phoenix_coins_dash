import axios from "axios";

const coinsAsset= axios.create({
    baseURL: `https://api.coincap.io/v2/assets`
})

export const coinsAPI = {
    async getCoins(limit = 100, offset = 0) {
        const response = await coinsAsset.get(`?limit=${limit}&offset=${offset}`)
        return response.data.data
    }
}