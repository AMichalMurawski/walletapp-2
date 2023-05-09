import * as React from 'react';
import css from './DiagramTab.module.scss';
import Chart from './Chart/Chart';
import Table from './Table/Table';
import { useChart } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { transactionsSummary } from '../../redux/chart/chartThunk';

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

const DiagramTab = () => {
  const { year, month } = useChart();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsSummary());
  }, [dispatch, year, month]);

  return (
    <div className={css.container}>
      <Chart colors={colors} />
      <Table colors={colors} />
    </div>
  );
};

export default DiagramTab;
