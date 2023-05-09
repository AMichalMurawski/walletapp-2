// import { Helmet } from 'react-helmet';
// import React, { useEffect, useState } from 'react';
// import Statistics from './Statistics';
// import { IconSvg } from './IconSvg';
// import { ModalLogout } from '../components/Modal/ModalLogout/ModalLogout';
// // import "./_home.scss";
// import scss from './Home.module.scss';
// import { ModalLogout } from '../components/Modal/ModalLogout/ModalLogout';

// const MainWalletPage = () => {
//   const [currency, setCurrency] = useState();

//   const fetchUserData = async () => {
//     await fetch('http://api.nbp.pl/api/exchangerates/tables/C')
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         setCurrency(data[0].rates);
//         console.log(data);
//       });
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <div className="containter">
//       <Helmet>
//         <title>MainWalletPage</title>
//       </Helmet>
//       <div className={scss.container}>
//         <div className={scss.main}>
//           <div className={scss.logo}>
//             <IconSvg icon="logo" />
//           </div>
//           <div className={scss.wallet}>Wallet</div>
//         </div>
//         <div className={scss.main}>
//           <h1 className={scss.logout}>Name</h1>
//           <p className={scss.dot}></p>
//           <div className={scss.exit}>
//             <IconSvg icon="exit" />
//           </div>
//           <h1 className={scss.logout}>Exit</h1>
//           <ModalLogout />
//         </div>
//       </div>

//       <div className={scss.mainLayout}>
//         <div className={scss.tableAdjust}>
//           <div className={scss.mainHome}>
//             <div className={scss.home}>
//               <IconSvg icon="home" />
//             </div>
//             <h1 className={scss.textPlain}>Home</h1>
//           </div>
//           <div className={scss.mainStats}>
//             <div className={scss.stats}>
//               <IconSvg icon="stats" />
//             </div>
//             <h1 className={scss.textPlain}>Statistics</h1>
//           </div>
//           <div className={scss.balanceMain}>
//             <div className={scss.balanceTitle}>Your Balance</div>
//             <div className={scss.balanceNumber}>Balance</div>
//           </div>
//         </div>
//         {currency && (
//           <div className={scss.mainTable}>
//             <table className={scss.table}>
//               <tbody>
//                 <tr className={scss.tableHead}>
//                   <th>Currency</th>
//                   <th>Purchase</th>
//                   <th>Sale</th>
//                 </tr>

//                 <tr className={scss.tableTr}>
//                   <td>{currency[0].code}</td>
//                   <td>{currency[0].ask}</td>
//                   <td>{currency[0].bid}</td>
//                 </tr>
//                 <tr className={scss.tableTr}>
//                   <td>{currency[3].code}</td>
//                   <td>{currency[3].ask}</td>
//                   <td>{currency[3].bid}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <Statistics />

//       <button className={scss.statsButton}>+</button>
//     </div>
//   );
// };

// export default MainWalletPage;
