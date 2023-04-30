import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Navigation = () => {

  return (
    <div className={css.navigation}>
      <NavLink className={css.navigation__link} to="/home">
        <div className={css.navigation__icons} >
          <HomeIcon />
        </div>
        <div className={css.navigation__text} >
          Home
        </div>
      </NavLink>

      <NavLink className={css.navigation__link} to="/statistics">
        <div className={css.navigation__icons} >
          <TimelineIcon />
        </div>
        <div className={css.navigation__text} >
          Statistics
        </div>
      </NavLink>

      <NavLink className={css.navigation__link} to="/currency">
        <div className={css.navigation__icons} >
          <AttachMoneyIcon />
        </div>
      </NavLink>

    </div>
  );
};

