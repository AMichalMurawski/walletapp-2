import scss from './Home.module.scss';

const AddButton =() =>{
    return (
        <div className={scss.statsButtonContainer}>        
            <button className={scss.statsButton}>
        +
        </button>
        </div>
    )
}

export default AddButton;