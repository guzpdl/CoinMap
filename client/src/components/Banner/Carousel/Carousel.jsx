import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { Link } from 'react-router-dom'
import addDots from '../../../utils/addDots.util'

import  "./Carousel.css"


const Carousel = ({trending}) => {
    
    
    const items = trending.map((coin, index)=>{
        // console.log(coin?.price_change_percentage_24h)
        return(
            <Link className='carouselItem' to={`/coins/${coin.id}`}>
                  <img className="logo "src={coin?.image} alt=''/>
                  <span>{coin?.name}</span>
                  <span>
                    <span className='text-muted'>{coin?.symbol} </span>
                    <span style={coin?.price_change_percentage_24h_in_currency > 0 ?{color: "#8dc647" } 
        : coin?.price_change_percentage_24h_in_currency === 0?{color: "gray"}
        :{color: "#e15241"}}>{coin?.price_change_percentage_24h_in_currency?.toFixed(2)}%</span>
                  </span>
                  <span>{addDots(coin?.current_price)}$</span>
        </Link>
        )
    })
    const responsive = {
        0: {
            items: 2
        },
        512:{
            items: 4
        }
    }
        return (
            <div className='carousel'>
                 <AliceCarousel  
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                    autoPlay
                    responsive={responsive}
                    items={items}
                />
                
            </div>
        )
    
}

export default Carousel
       
       