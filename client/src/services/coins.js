import InitAxios from "./initAxios";

class CoinsAxios extends InitAxios {
    constructor(){
        super('/coins')
    }

    async getCoinList(body){
        return this.axios.get(`/home`, body).then((response) => response.data)
    }
    async trend(body){
        return this.axios.get(`/trending`, body).then((response) => response.data)
    }
}

export default CoinsAxios

