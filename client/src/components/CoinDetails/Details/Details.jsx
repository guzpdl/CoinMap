import { Container } from 'react-bootstrap';
import addDots from '../../../utils/addDots.util'
import './Details.css'

const Details = ({details, detailsMD}) => {






  // console.log({details})
return ( 

    details &&
    <div className='coinContainer'>
      <div className='details'>
          <div className='heading'> 
          <div className='d-flex justify-content-center'>
          <img src={details?.thumb} alt=""/>
          <h3>{detailsMD?.name} <span className='text-uppercase text-muted'>{detailsMD?.symbol}</span></h3>
          </div>
          
            
         

          <div className='marketData heading'>
            <h5 className='d-flex'>Rank:&nbsp; &nbsp;{addDots(details?.market_cap_rank)}</h5>
            <h5 className='d-flex'>Current Price:&nbsp; &nbsp;{addDots(details?.currentPriceUsd)}</h5>
            <h5 className='d-flex'>Market Cap:&nbsp; &nbsp;${addDots(details?.marketCapUsd)}</h5>
          </div>

          <div className='marketData heading'>
            <h5 className='d-flex'>Max Supply:&nbsp; &nbsp;{addDots(details?.max_supply)} {detailsMD?.symbol?.toUpperCase()}</h5>
            <h5 className='d-flex'>Circulating Supply:&nbsp; &nbsp;{addDots(details?.circulating_supply)} {detailsMD?.symbol.toUpperCase()}</h5>
          </div>

          <div className='marketData heading'>
            <div className='row'>
            <h5 className='text-center' >24H:&nbsp; &nbsp;</h5>
            <h5 style={details?.price_change_24h > 0 ?{color: "#8dc647" } 
          : details?.price_change_24h === 0?{color: "gray"}
          :{color: "#e15241"}}>{addDots(details?.price_change_24h?.toFixed(2))}$</h5>
            </div>
            <div className='row'>
            <h5 className='text-center' >24H:&nbsp; &nbsp;</h5>
            <h5 style={details?.price_change_24h > 0 ?{color: "#8dc647" } 
          : details?.price_change_24h === 0?{color: "gray"}
          :{color: "#e15241"}}>{ details?.price_change_percentage_24h &&  addDots(details?.price_change_percentage_24h?.toFixed(2))}%</h5>
            </div>
            <h5 className='d-flex'>Volumen:&nbsp; &nbsp;${addDots(details?.volumeUsd)}</h5>
          </div> 
          <p className="description" dangerouslySetInnerHTML={{__html: details?.en}}></p>         
          <h1>{detailsMD?.coment}</h1>
          
          </div>
      </div>
    </div>
    
  )
}

export default Details

        