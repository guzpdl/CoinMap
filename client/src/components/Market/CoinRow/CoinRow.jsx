import React, { useContext, useEffect, useState } from "react";
import "../CoinTable.css";
import addDots from "../../../utils/addDots.util";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../context/auth.context";
import RegistryModal from "../../SignUp/SignUp";
import userAxios from "../../../services/userAxios.service";

const CoinRow = ({ coin, index }) => {
  const { user, isLoggedIn, authentication } = useContext(AuthContext);

  // console.log(isLoggedIn)

  // useEffect(() => {
  //     console.log("QUE HAY DENTRO DE LA ID =>",coin.id)
  // }, [coin])

  const [fav, setFav] = useState(false);

  // NECESITO DOS ARGUMENTOS: el id del user => user del contexto
  // LO UNICO QUE NECESITO AHORA ES LA ID DE LA MONEDA QUE ESTÉ LIKEANDO
  const favsAdd = (id, body) => {
    userAxios
      .updateFavCoins(id, body)
      .then((data) => {
        authentication();
        console.log("added", data);
      })
      .catch((err) => console.log(err));
  };

  const favsDelete = (id, body) => {
    userAxios
      .removeFavCoins(id, body)
      .then((data) => {
        authentication();
        console.log("removed", data);
      })
      .catch((err) => console.log(err));
  };

  function handleFav() {
    setFav(!fav);
    if (!fav && user && coin) {
      favsAdd(user._id, { favCoin: coin.id });
    } else {
      favsDelete(user._id, { favCoin: coin.id });
    }
  }

  const { favorite_coins } = user;
  const mapId = favorite_coins?.map((e) => e.id);

  return (
    <tr>
      <td>
        {mapId?.includes(coin.id) ? (
          <FontAwesomeIcon
            onClick={() => {
              handleFav();
            }}
            icon={faHeartCircleCheck}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              handleFav();
            }}
            icon={faHeart}
          />
        )}
      </td>
      <td>{index}</td>
      <td>
        <img src={coin.image} className="img-fluid me-4 coinLogo" alt="" />
        <LinkContainer to={`/coins/${coin.id}`}>
          <Link className="pointer name">{coin.name}</Link>
        </LinkContainer>
        <span className="ms-3 text-muted text-uppercase pointer">
          {coin.symbol}
        </span>
      </td>
      <td>${addDots(coin.current_price)}</td>
      <td
        style={
          coin.price_change_percentage_1h_in_currency > 0
            ? { color: "#8dc647" }
            : coin.price_change_percentage_1h_in_currency === 0
            ? { color: "gray" }
            : { color: "#e15241" }
        }
      >
        {coin.price_change_percentage_1h_in_currency}%
      </td>
      <td
        style={
          coin.price_change_percentage_24h_in_currency > 0
            ? { color: "#8dc647" }
            : coin.price_change_percentage_24h_in_currency === 0
            ? { color: "gray" }
            : { color: "#e15241" }
        }
      >
        {coin.price_change_percentage_24h_in_currency}%
      </td>
      <td
        style={
          coin.price_change_percentage_7d_in_currency > 0
            ? { color: "#8dc647" }
            : coin.price_change_percentage_7dh_in_currency === 0
            ? { color: "gray" }
            : { color: "#e15241" }
        }
      >
        {coin.price_change_percentage_7d_in_currency}%
      </td>
      <td>${addDots(coin.total_volume)}</td>
      <td>${addDots(coin.market_cap)}</td>
    </tr>
  );
};

export default CoinRow;
