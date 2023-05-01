import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import Table from "./Table";

const Statistics = () => {

    const [currency, setCurrency] = useState()
    const getHeadings = () => {
            return Object.keys(currency[0]);
        }    
    const fetchUserData = async() => {
        await fetch("http://api.nbp.pl/api/exchangerates/tables/C")
         .then(response => {
           return response.json();

         })
         .then(data => {
           setCurrency(data[0].rates)
            
         })
     } 

     useEffect(() => {
        fetchUserData()
      }, [])

  return (
    <>
      <Helmet>
        Statistics
    </Helmet>
    { currency &&
        <div className="statisticsTable">
     <Table theadData={getHeadings()} tbodyData={currency} />
        </div>
    }
     </>
  );
};

export default Statistics;
