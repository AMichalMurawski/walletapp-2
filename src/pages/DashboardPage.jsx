import { Helmet } from "react-helmet";
import { useState } from "react";
import Chart from "../components/Chart/Chart";
import ChooseMonth from "../components/ChooseMonth/ChooseMonth";
import ChooseYear from "../components/ChooseYear/ChooseYear";
import Home from './home/Home'
const DashboardPage = () => {

  const [selected, setSelected] = useState("Choose month");
  const [selectedYear, setSelectedYear] = useState("Choose year");

  return (
    <>
      <Helmet>
        <title>walletapp</title>
      </Helmet>
      <Home/>
      {/* <Chart />
      <ChooseMonth  selected={selected} setSelected={setSelected}/>
      <ChooseYear  selected={selectedYear} setSelected={setSelectedYear}/> */}
    </>
  );
};

export default DashboardPage;