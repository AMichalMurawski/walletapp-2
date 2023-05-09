import * as React from 'react';
import css from './DiagramTab.module.scss';
import Chart from './Chart/Chart';
import Table from './Table/Table';
import { useAuth, useChart } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { transactionsSummary } from '../../redux/chart/chartThunk';

const DiagramTab = () => {
  const { year, month } = useChart();
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsSummary);
  }, [user, year, month]);

  return (
    <div className={css.container}>
      <Chart />
      <Table />
    </div>
  );
};

export default DiagramTab;
