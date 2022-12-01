import React from 'react'
import { useEffect, useState } from 'react';
import DetailsAxios from '../../services/details';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Details from '../../components/CoinDetails/Details/Details';
import "./CoinDetails.css"
import Graphics from '../../components/CoinDetails/Chart/Chart';
import Comments from '../../components/CoinDetails/Comments/Comments';


const CoinDetails = () => {

    
    const detailsAxios = new DetailsAxios()
    const [details, setDetails] = useState(null)
    const [detailsMD, setDetailsMD] = useState({})
    const [historicalData, setHistoricalData] = useState([])
    // const [interval, setInterval] = useState(1)

    const { id} = useParams()
    // console.log('PARAMS', id)

        const getDetails = (id) => {
            detailsAxios
                .coinData(id)
                .then(({data}) => {
                    setDetails(data)
                })
                .catch((err) => console.log(err))
        }

        const getDetailsMD = (id) => {
            detailsAxios
                .coinDataMD(id)
                .then(({data}) => {
                    setDetailsMD(data[0])
                })
                .catch((err) => console.log(err))
        }

        const getChart = (id) => {
            detailsAxios
                .historicalChart(id)
                .then(({data}) => {
                    // console.log('DENTRO DEL SERVICIO CONDATA', data.prices)
                    setHistoricalData(data)
                })
                .catch((err) => console.log(err))
        }

        useEffect(() => {
            getDetails(id)
            getDetailsMD(id)
            getChart(id)
        }, [])

  return (
                <Container>
                <Row>
                <Col xs='3'>
                <Details details={details} detailsMD={detailsMD}/>   
                </Col>
                <Col xs='9'>
                <Graphics detailsMD={detailsMD} historicalData={historicalData}/>
                <Comments  coinId={id} detailsMD={detailsMD}/>
                </Col>
                </Row>
                </Container>
  )
}

export default CoinDetails