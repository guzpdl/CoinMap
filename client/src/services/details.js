import InitAxios from "./initAxios";

class DetailsAxios extends InitAxios {
  constructor() {
    super("/details");
  }

  async coinData(id) {
    return this.axios.get(`/coins/${id}`);
  }

  async coinDataMD(id) {
    return this.axios.get(`/${id}`);
  }

  async historicalChart(id) {
    return this.axios.get(`/chart/${id}`);
  }

  getComments(id) {
    return this.axios
      .get(`/coins/comment/${id}`)
      .then((response) => response.data);
  }

  createComment(id, body, ) {
    return this.axios
      .post(`/coins/comment/${id}`, body,  {
        headers: {
          authorization: `Bearer ${localStorage.getItem("tokenAuth")}`,
        },
      })
      .then((response) => response.data);
  }

  deleteComment(id){
    return this.axios
    .delete(`/coins/comment/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("tokenAuth")}`,
        },
      })
      .then((response) => response.data);
  }
}

export default DetailsAxios;
