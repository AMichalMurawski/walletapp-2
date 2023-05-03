import IconSvg from '../IconSvg';
import scss from './Home.module.scss';
const Header = () =>{

    return(
<div className={scss.containerHeader}>
        <button className={scss.button}>
        <div className={scss.main}>     
        <div className={scss.logo}>
        <IconSvg icon="logo"/>
        </div>
        <div className={scss.wallet}>Wallet</div>
        </div>
        </button>
        <div className={scss.main}>
        <button className={scss.button}>
        <h1 className={scss.logout}>Name</h1>
        </button>
        <p className={scss.dot}></p>
        <button className={scss.button}>
        <div className={scss.exit}>
        <IconSvg icon="exit"/>
        </div>
        <h1 className={scss.logout}>Exit</h1>
        </button>
        </div>
        </div>)
}

export default Header