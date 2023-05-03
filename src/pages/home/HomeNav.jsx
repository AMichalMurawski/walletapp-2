import IconSvg from '../IconSvg';
import scss from './Home.module.scss';

const HomeNav = () =>{
return (
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
)
}
export default HomeNav;
