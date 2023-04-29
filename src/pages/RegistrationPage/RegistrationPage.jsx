import { Helmet } from 'react-helmet';
import Media from 'react-media';
import s from './RegistrationPage.module.scss';
import register_tab from '../../images/imgLogin/Register@1x_tab.png';
import register_tab_2x from '../../images/imgLogin/Register@2x_tab.png';
import register_desk from '../../images/imgLogin/Register@1x_desk.png';
import register_desk_2x from '../../images/imgLogin/Register@2x_desk.png';

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <div className={s.back}>
          <div className={s.container}>
            <div className={s.registerContainer}>
              <Media
                queries={{
                  tab: '(min-width: 768px) and (max-width: 1279px)',
                  desk: '(min-width: 1280px)',
                }}
              >
                {matches => (
                  <>
                    {matches.tab && (
                      <div className={s.registerImgWrapper}>
                        <img
                          src={register_tab}
                          srcSet={`${register_tab_2x} 2x`}
                          alt="The phone with app on the screen"
                          className={s.registerImg}
                        />
                        <p className={s.appTitle}>Finance App</p>
                      </div>
                    )}
                    {matches.desk && (
                      <div className={s.registerImgWrapper}>
                        <img
                          src={register_desk}
                          srcSet={`${register_desk_2x} 2x`}
                          alt="The phone with app on the screen"
                          className={s.registerImg}
                        />
                        <p className={s.appTitle}>Finance App</p>
                      </div>
                    )}
                  </>
                )}
              </Media>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default RegistrationPage;
