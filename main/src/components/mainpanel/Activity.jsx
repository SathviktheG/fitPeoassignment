import { Bar } from 'react-chartjs-2';
import { floatingBarData } from './../../data/activityData.js'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: { display: false },
      ticks: { stepSize: 1 },
    },
    x: {
      grid: { display: false },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx) => `Session tokens: ${ctx.parsed.y}`,
      },
    }
  },
};

const Activity = () => {
  return (
    <div>
      <div className='w-[100%] h-70 xl:h-[100%] flex items-center justify-center overflow-hidden'>
        <Bar data={floatingBarData} options={options} />
      </div>
    </div>
  )
}

export default Activity