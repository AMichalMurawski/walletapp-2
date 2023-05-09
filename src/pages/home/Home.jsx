// import { Helmet } from 'react-helmet';
// import Media from 'react-media';
// import { Header } from '../../components/Header/Header';
// import Balance from '../../components/Balance/Balance';
// import Currency from '../../components/Currency/Currency';
// import AddButton from '../../components/utils/AddButton/AddButton';
// import Navigation from '../../components/Navigation/Navigation';
// import Card from '../../components/utils/Card/Card';
// import scss from './Home.module.scss';

// const HomePage = () => {
//   return (
//     <div className={scss.pageHomeContainer}>
//       <Helmet>
//         <title>MainWalletPage</title>
//       </Helmet>
//       <Header />
//       <Media
//         queries={{
//           mob: '(max-width: 767px)',
//           tab: '(min-width: 768px) and (max-width: 1280px)',
//           desk: '(min-width: 1280px)',
//         }}
//       >
//         {matches => (
//           <>
//             {matches.mob && (
//               <div className={scss.primary}>
//                 <div>
//                   <Navigation />

//                   <Balance />
//                 </div>
//                 <Card />
//               </div>
//             )}
//             {matches.tab && (
//               <div className={scss.primary}>
//                 <div className={scss.secondary}>
//                   <div>
//                     <Navigation />

//                     <Balance />
//                   </div>
//                   <Currency />
//                 </div>
//               </div>
//             )}
//             {matches.desk && (
//               <div className={scss.primary}>
//                 <div>
//                   <Navigation />

//                   <Balance />

//                   <Currency />
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </Media>

//       <AddButton />
//     </div>
//   );
// };

// export default HomePage;
