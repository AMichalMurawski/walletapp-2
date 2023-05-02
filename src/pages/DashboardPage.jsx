import { Helmet } from "react-helmet";
import { useState } from "react";
import Chart from "../components/Chart/Chart";
import ChooseMonth from "../components/ChooseMonth/ChooseMonth";
import ChooseYear from "../components/ChooseYear/ChooseYear";

const DashboardPage = () => {

  const [selected, setSelected] = useState("Choose month");
  const [selectedYear, setSelectedYear] = useState("Choose year");

  return (
    <>
      <Helmet>
        <title>walletapp</title>
      </Helmet>
      <Chart />
      <ChooseMonth  selected={selected} setSelected={setSelected}/>
      <ChooseYear  selected={selectedYear} setSelected={setSelectedYear}/>
    </>
  );
};

export default DashboardPage;