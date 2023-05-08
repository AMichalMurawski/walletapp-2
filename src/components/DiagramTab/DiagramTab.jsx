import { Chart } from '../Chart/Chart';
import { ChooseMonth } from '../ChooseMonth/ChooseMonth';
import { ChooseYear } from '../ChooseYear/ChooseYear';
import { LegendChart } from '../LegendChart/LegendChart';

const DiagramTab = () => {
  return (
    <div>
      <Chart />
      <ChooseMonth />
      <ChooseYear />
      <LegendChart />
    </div>
  );
};

export default DiagramTab;
