import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Chart from '../components/Chart/Chart';
import ChooseMonth from '../components/ChooseMonth/ChooseMonth';
import ChooseYear from '../components/ChooseYear/ChooseYear';
import LegendChart from '../components/LegendChart/LegendChart';
import css from './DashboardPage.module.scss';

const DashboardPage = () => {
  const [selected, setSelected] = useState('Month');
  const [selectedYear, setSelectedYear] = useState('Year');

  return (
    <>
      <Helmet>
        <title>walletapp</title>
      </Helmet>
      <div className={css.statisticsContainer}>
        <Chart />
        <div className={css.statisticsPage}>
          <div className={css.statisticsSelect}>
            <ChooseMonth selected={selected} setSelected={setSelected} />
            <ChooseYear selected={selectedYear} setSelected={setSelectedYear} />
          </div>
          <LegendChart />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
