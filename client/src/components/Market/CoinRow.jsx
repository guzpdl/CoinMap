import React from "react";
import "./CoinTable.css";
import addDots from "../../utils/addDots.util";

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img src={coin.image} className="img-fluid me-4 coinLogo" alt="" />
        <span className="pointer name">{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase pointer">
          {coin.symbol}
        </span>
      </td>
      <td>{addDots(coin.current_price)}$</td>
      <td
        style={
          coin.price_change_percentage_1h_in_currency > 0
            ? { color: "#8dc647" }
            : coin.price_change_percentage_1h_in_currency === 0
            ? { color: "gray" }
            : { color: "#e15241" }
        }
      >
        {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
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
        {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
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
        {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
      </td>
      <td>{addDots(coin.total_volume)}$</td>
      <td>{addDots(coin.market_cap)}$</td>
    </tr>
  );
};

export default CoinRow;
