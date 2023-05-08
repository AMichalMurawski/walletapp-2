import scss from './AddButton.module.scss';

export const AddButton = () => {
  return (
    <div className={scss.statsButtonContainer}>
      <button className={scss.statsButton}>+</button>
    </div>
  );
};
