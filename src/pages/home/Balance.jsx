import scss from './Home.module.scss'

const Balance = () =>{
    return (
        <div className={scss.balanceMain}>
        <div className={scss.balanceTitle}>Your Balance</div>
        <div className={scss.balanceNumber}>Balance</div>    

    </div>
    )
}

export default Balance;