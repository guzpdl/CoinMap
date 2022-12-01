import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
// import faker from 'Faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);




const Graphics = ({historicalData, detailsMD}) => {
  const data = historicalData.prices
  
  const graphic = data?.map(value => ({ x:value[0], y: value[1].toFixed(2) }))

  const options = {
    responsive: true
  }
  const info = {
      labels: graphic?.map(value => moment(value.x).format("MMM DD YY")),
      datasets:[
        {
          fill: true,
          label: detailsMD.name,
          data: graphic?.map(value => value.y),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }
      ]
    }
  
  return (
      <Line options={options} data={info}/>
  )
}

export default Graphics