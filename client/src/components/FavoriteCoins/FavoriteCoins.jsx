import { Container, Row, Card, Col } from "react-bootstrap";
import { useContext, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap";
import addDots from "../../utils/addDots.util";
import userAxios from '../../services/userAxios.service'
import { AuthContext } from "../../context/auth.context";
import './FavoriteCoins.css'


const FavoriteCoins = ({ userData, user }) => {

  // console.log(userData)
  const favData = userData.favorite_coins;

  const {authentication} = useContext(AuthContext)

  // console.log(userData.favorite_coins)
  // console.log('USER DATA EN FAVORITE COINS', userData.favorite_coins);

  const [fav, setFav] = useState(false);

// NECESITO DOS ARGUMENTOS: el id del user => user del contexto 
// LO UNICO QUE NECESITO AHORA ES LA ID DE LA MONEDA QUE ESTÉ LIKEANDO
// const favsDelete = (id, body) => {
//     userAxios
//         .removeFavCoins(id, body)
//         .then((data) => {
//             authentication()
//             console.log("removed",data)
//         })
//         .catch((err) => console.log(err))
// }

const handleRemove = (nameOfCoin) => {

  console.log(nameOfCoin);
  console.log(userData._id)

  userAxios
  .removeFavCoins({_id: userData._id}, nameOfCoin)
  .then(() => {
    console.log('llega? problema de estructura de datos');
  })
}


  return favData?.map((e, index) => {
    let nameOfCoin = e.en.split(" ")[0].toLowerCase();


    return (
      <Col xs="4">
        <div key={index} className="">
          <Container>
            <Card
              className="my-5 col-2 d-flex"
              style={{ width: "18rem", alignItems: "center" }}
            >
              <Card.Body style={{ color: "black" }}>
                <Card.Title style={{ textAlign: "center" }}>
                  {e.en.split(" ")[0]}
                </Card.Title>
              </Card.Body>
              <Card.Img className='pb-2' variant="top" src={e.thumb} style={{ width: "2rem" }} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <b>Rank: </b>
                  {e.market_cap_rank}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Current Price: </b>${e.currentPriceUsd}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Change 24h: </b>
                  <span
                    style={
                      e.price_change_percentage_24h > 0
                        ? { color: "#8dc647" }
                        : e.price_change_percentage_24h === 0
                        ? { color: "gray" }
                        : { color: "#e15241" }
                    }
                  >
                    {" "}
                    {e?.price_change_percentage_24h?.toFixed(2)}%
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Market Cap: </b>${addDots(e.marketCapUsd)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Volume: </b>${addDots(e.volumeUsd)}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link className='link' href={`/coins/${nameOfCoin}`}>
                  See more details
                </Card.Link>
                <Card.Link  className='link' href="#" onClick={() => {handleRemove(nameOfCoin)}}>
                  Remove favorite
                </Card.Link>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Col>
    );
  });
};

export default FavoriteCoins;
