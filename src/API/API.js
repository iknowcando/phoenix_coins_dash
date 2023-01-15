import axios from "axios";

const coinsAsset= axios.create({
    baseURL: `https://coin360.com`
})

export const coinsAPI = {
    async getCoins(ue='USD',limit = 101,timeSlice='24h') {
        const response = await coinsAsset.get(`/site-api/coins?currency=${ue}&limit=${limit}&period=${timeSlice}`)
        console.log(response.data.data)
        return response.data.data
    }
}