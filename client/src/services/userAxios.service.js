import InitAxios from "./initAxios";

class UserAxios extends InitAxios {
  constructor() {
    super("/user");
  }

  me(token) {
    return this.axios
      .get("/profile", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data);
  }

  getOneUserById(id){
    return this.axios.get(`/profile/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
        },
      }).then((response) => response.data)
  }

  getFavCoins(id){
    return this.axios.get(`/profile/favs/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
      },
    }).then((response) => response.data)
  }

  editProfile(id, body) {
    return this.axios
      .put(`/profile/${id}`, body, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
        }
      })
      .then((response) => response.data);
  }

  updateFavCoins(id, body){
    return this.axios
    .put(`/profile/favs/${id}`, body , {
      headers: {
        authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
      }
    })
    .then((response) => response.data);
  }

  removeFavCoins(id, body){
    return this.axios
    .put(`/profile/favs/remove/${id}`, body, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
      }
    })
    .then((response) => response.data);
  }



  static getInstance() {
    if (!this.instance) {
      this.instance = new UserAxios();
    }
    return this.instance;
  }
}

export default UserAxios.getInstance();
