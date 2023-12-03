import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
  } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement
  );

export default function PieChart() {
    const data = {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [
          {
            data: [30, 40, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
  return (
    <div className='w-96 '>
          <h2>Pie Chart</h2>
          <Pie data={data}  />
    </div>
  )
}
