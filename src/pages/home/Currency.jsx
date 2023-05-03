import scss from './Home.module.scss';
import React, { useEffect, useState } from "react";
const Currency = () =>{
    const [currency, setCurrency] = useState()
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
      return(
        <>
        {currency &&
        <div className={scss.mainTable}>
        <table className={scss.tableCurrency}>
          <tbody>
            <tr className={scss.tableHead}>
              <th >Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
            
              <tr className={scss.tableTr}>
                <td>{currency[0].code}</td>
                <td >{currency[0].ask}</td>
                <td>{currency[0].bid}</td>
              </tr>
              <tr className={scss.tableTr}>
                <td>{currency[3].code}</td>
                <td >{currency[3].ask}</td>
                <td>{currency[3].bid}</td>
              </tr>  
          </tbody>
        </table>
        </div>}
        </>
        
      )
}

export default Currency;