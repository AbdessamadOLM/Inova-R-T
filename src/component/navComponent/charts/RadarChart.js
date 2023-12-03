import React from 'react'
import {
    Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
  );
export default function RadarChart() {
    const data = {
        labels: ['Force', 'Agilité', 'Endurance', 'Précision', 'Réflexes'],
        datasets: [
          {
            label: 'Joueur 1',
            backgroundColor: 'rgba(179, 181, 198, 0.2)',
            borderColor: 'rgba(179, 181, 198, 1)',
            pointBackgroundColor: 'rgba(179, 181, 198, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179, 181, 198, 1)',
            data: [65, 59, 90, 81, 56],
          },
          {
            label: 'Joueur 2',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
            data: [45, 75, 56, 32, 70],
          },
        ],
      };
    
      // Options du graphique
      const options = {
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      };
    
  return (
    <div>
        <div className='w-96 '>
          <h2>RadarChart</h2>
          <Radar data={data} options={options} />
        </div>
    </div>
  )
}
