import { useContext, useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import EditProfileModal from "../../components/EditProfile/EditProfile";
import FavoriteCoins from "../../components/FavoriteCoins/FavoriteCoins";
import { AuthContext } from "../../context/auth.context";
import DetailsAxios from "../../services/details";
import UserAxios from "../../services/userAxios.service";
import "./ProfilePage.css";

const ProfilePage = () => {
  // const navigate = useNavigate()
  const { user, isLoading, isLoggedIn } = useContext(AuthContext);
  const detailsAxios = new DetailsAxios();

  const [userData, setuserData] = useState([]);
  
  const { id } = useParams();

  const getDetails = (idDetails) => {
    return detailsAxios
      .coinData(idDetails)
      .then(({ data }) => {
        // console.log('DENTRO DEL SERVICIO CONDATA', data)
        // setDetails(data);
        // console.log(data)
        return data
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // console.log("ESTE ES EL USER DATA",userData)
  }, [userData])
  


  const getFavs =  () => {
    UserAxios.getFavCoins(id)
    .then((user) => {
      const { favorite_coins } = user;
      Promise.all(
        favorite_coins?.map((e) => {
          // console.log(e)
          return (getDetails(e.id));
        })
        )
        .then((data) => {
          console.log('Entraaaa!!!')
          setuserData({...user, favorite_coins:data}) 
        })
          .catch((err) => {
            console.log(err);
          })
      })
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    getFavs();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  else{
    return (
      <Container>
        <Row >
          <h1>{user.username}</h1>
          <p>e-mail: {user.email}</p>
          <div className="w-75">
          <EditProfileModal  user={user} />
          </div>
          <div className="panel  ">
            <div className=" panel-body bio-graph-info d-flex ">
              <Row>
              {userData &&
              <FavoriteCoins   userData={userData}/>
              }

              </Row>
            </div>
          </div>
        </Row>
      </Container>
    )
  };
  }

export default ProfilePage;
