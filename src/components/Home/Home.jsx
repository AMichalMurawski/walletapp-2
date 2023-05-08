import { Helmet } from 'react-helmet';
import Table from '../utils/Table/Table';

import scss from './Home.module.scss';
import data from '../../data.json';

const Home = () => {
  const dataJson = data[0].data;
  const getHeadings = () => {
    return Object.keys(...dataJson);
  };
  return (
    <>
      <Helmet>Home</Helmet>
      <div className={scss.statsMain}>
        {dataJson && (
          <div className={scss.statisticsTable}>
             
            <Table
              theadData={getHeadings()}
              tbodyData={dataJson}
              className={'statisticsTable'}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
