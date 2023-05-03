import { Helmet } from "react-helmet";
import Media from "react-media";
import Header from "./Header";
import Balance from "./Balance";
import Statistics from "./Statistics";
import Currency from "./Currency";
import AddButton from "./AddButton";
import HomeNav from "./HomeNav";
import scss from './Home.module.scss'

    const MainWalletPage = () => {
     
       return (
    <div className={scss.pageHomeContainer}>
      <Helmet>
        <title>MainWalletPage</title>
      </Helmet>

        <Header/>
        <Media
        queries ={{
          mob : "(max-width: 767px)",
          tab: "(min-width: 768px) and (max-width: 1280px)",
          desk:"(min-width: 1280px)",
        }}
        >
       { matches => (
        <>
        {matches.mob && 
        (
          <div className={scss.primary}> 
       <div>
        <HomeNav/>
       
        <Balance/>
        </div>
        <Statistics/>
        </div>
        )}
        {matches.tab && (
          <div className={scss.primary}> 
          <div className={scss.secondary}>
           <div>
           <HomeNav/>
            
           <Balance/>
           </div>
           <Currency/>
           
           </div>
           <Statistics/>
           </div>
        )}
        {matches.desk && (
          <div className={scss.primary}> 
          <div>
           <HomeNav/>
          
           <Balance/>
   
           <Currency/>
           </div>
           <Statistics/>
           </div>
        )}
        </>
       )}  
        </Media>
       {/* <div className={scss.primary}> 
       <div>
        <HomeNav/>
       
        <Balance/>

        <Currency/>
        </div>
        <Statistics/>
        </div> */}
        <AddButton/>

        </div>
  );
};

export default MainWalletPage;
