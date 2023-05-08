import { Helmet } from 'react-helmet';
import Home from '../pages/home/Home'

const DashboardPage = () => {

  return (
    <>
      <Helmet>
        <title>walletapp</title>
      </Helmet>
      <Home/>
    </>
  );
};

export default DashboardPage;
