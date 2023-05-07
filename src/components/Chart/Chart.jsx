import css from './Chart.module.scss';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


const Chart = () => {

const data = {    
    labels: ['Main expenses', "Products", "Car", "Self care", "Child care", "Household products", "Education", "Leisure", "Other exprenses"],
    datasets: [{
        labels: ['Main expenses', "Products", "Car", "Self care", "Child care", "Household products", "Education", "Leisure", "Other exprenses"],
        data: [3,6,9,30,11,14,7,34,23],
        backgroundColor: ['#FED057', '#FFD8D0', '#FD9498', '#C5BAFF','#6E78E8', '#4A56E2', '#81E1FF', '#24CCA7', '#00AD84'],
        borderColor: ['#FED057', '#FFD8D0', '#FD9498', '#C5BAFF', '#6E78E8', '#4A56E2', '#81E1FF', '#24CCA7', '#00AD84'],
        cutout: "70%",
    }],
}

const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw (chart, args, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        ctx.font = 'bolder 22px sans-serif';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(`$ ${data.datasets[0].data[5]}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

const options = {
    plugins: {
        legend: {
            
            position: 'bottom',
            align: 'start',
            maxWidth: 20,
            maxHeight: 700,
            display: false,
            
                labels: {
                    boxWidth: 24,
                    boxHeight: 24,
                    padding: 26,
                }
        }
     }
}

    return (
        <div className={css.chartContainer}>
            <h1 className={css.statistics}> Statistics </h1>
        <div className={css.container}>
            <div> 
            <Doughnut
            data ={data}
            options={options}
            plugins = {[textCenter]}
            >
            </Doughnut>
            </div>
        </div>
</div>
    );
};
  
export default Chart;