import Media from 'react-media';
import IconSvg from '../utils/IconsSvg/IconSvg';
import scss from './Navigation.module.scss';

const Navigation = () =>{
return (

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
            <div className={scss.homeMob}>
           <button className={scss.button}>
          <div className={scss.homeMobIcon}>
          <IconSvg icon="home"/>
          </div>
          </button>
          <button className={scss.button}>
          <div className={scss.homeMobIcon}>
          <IconSvg icon="stats"/>
          </div>
          </button>
          <button className={scss.button}>
          <div className={scss.homeMobIcon}>
          <IconSvg icon="dolar"/>
          </div>   
          </button>   
            </div>
            

        )}
        {matches.tab && (
          <div className={scss.homeNav}>
          <button className={scss.button}>
          <div className={scss.mainHome}>     
          <div className={scss.home}>
          <IconSvg icon="home"/>
          </div>
          <h1 className={scss.textPlain}>Home</h1>
          </div>
          </button>
          <button className={scss.button}>
          <div className={scss.mainStats}>     
          <div className={scss.stats}>
          <IconSvg icon="stats"/>
          </div>
          <h1 className={scss.textPlain} >Statistics</h1>
          </div>
          </button>
          </div>
        )}
        {matches.desk && (
         <div className={scss.homeNav}>
         <button className={scss.button}>
         <div className={scss.mainHome}>     
         <div className={scss.home}>
         <IconSvg icon="home"/>
         </div>
         <h1 className={scss.textPlain}>Home</h1>
         </div>
         </button>
         <button className={scss.button}>
         <div className={scss.mainStats}>     
         <div className={scss.stats}>
         <IconSvg icon="stats"/>
         </div>
         <h1 className={scss.textPlain} >Statistics</h1>
         </div>
         </button>
         </div>
        )}
        </>
       )} 
        </Media>        
)
}
export default Navigation;
