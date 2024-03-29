import Media from 'react-media';
import IconSvg from '../utils/IconsSvg/IconSvg';
import scss from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/auth/authThunk';

export const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(signout());
  };

  return (
    <Media
      queries={{
        mob: '(max-width: 767px)',
        tab: '(min-width: 768px) and (max-width: 1280px)',
        desk: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <>
          {matches.mob && (
            <div className={scss.containerHeader}>
              <button className={scss.button}>
                <div className={scss.main}>
                  <div className={scss.logo}>
                    <IconSvg icon="logo" />
                  </div>
                  <div className={scss.wallet}>Wallet</div>
                </div>
              </button>
              <div className={scss.main}>
                <button className={scss.button}>
                  <h1 className={scss.logout}>Name</h1>
                </button>
                <p className={scss.dot}></p>
                <button
                  type="button"
                  className={scss.button}
                  onClick={handleLogout}
                >
                  <div type="button" className={scss.exit}>
                    <IconSvg icon="exit" />
                  </div>
                </button>
              </div>
            </div>
          )}
          {matches.tab && (
            <div className={scss.containerHeader}>
              <button className={scss.button}>
                <div className={scss.main}>
                  <div className={scss.logo}>
                    <IconSvg icon="logo" />
                  </div>
                  <div className={scss.wallet}>Wallet</div>
                </div>
              </button>
              <div className={scss.main}>
                <button className={scss.button}>
                  <h1 className={scss.logout}>Name</h1>
                </button>
                <p className={scss.dot}></p>
                <button
                  type="button"
                  className={scss.button}
                  onClick={handleLogout}
                >
                  <div type="button" className={scss.exit}>
                    <IconSvg icon="exit" />
                  </div>
                  <h1 className={scss.logout}>Exit</h1>
                </button>
              </div>
            </div>
          )}
          {matches.desk && (
            <div className={scss.containerHeader}>
              <button className={scss.button}>
                <div className={scss.main}>
                  <div className={scss.logo}>
                    <IconSvg icon="logo" />
                  </div>
                  <div className={scss.wallet}>Wallet</div>
                </div>
              </button>
              <div className={scss.main}>
                <button className={scss.button}>
                  <h1 className={scss.logout}>Name</h1>
                </button>
                <p className={scss.dot}></p>
                <button
                  type="button"
                  className={scss.button}
                  onClick={handleLogout}
                >
                  <div type="button" className={scss.exit}>
                    <IconSvg icon="exit" />
                  </div>
                  <h1 className={scss.logout}>Exit</h1>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </Media>
  );
};
