import {  Container } from 'react-bootstrap'
import './Banner.css'
import Carousel from "./Carousel/Carousel"


const Banner = ({trending}) => {
 
  return (
    <section className='banner'>
    <Container className='bannerContent my-5'>
      <div className='title my-5'>
      <h1 className='tag'>CoinMap - TOP 10 Cryptos</h1>
      <h3 className='subtitle'>Keep Up With Your Favorite Cryptocurrencies!</h3>
      </div>
    <Carousel trending={trending}/>
    </Container>
    </section>
      )
}

export default Banner