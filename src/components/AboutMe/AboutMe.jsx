import LandingTitle from '../LandingTitle/LandingTitle';

import './AboutMe.css';
import me from '../../images/me.jpg'

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <LandingTitle text="Студент" />
        <div className="about-me__info-wrapper">
          <div className="about-me__info">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className="about-me__github hover-opacity-link" href="https://github.com/thewayitshine" target="_blank">Github</a>
          </div>
          <img className="about-me__photo" src={me} alt="Фото студента" />
        </div>
        <div className="about-me__portfolio">
          <h4 className="about-me__portfolio-title">Портфолио</h4>
          <ul className="about-me__portfolio-links">
            <li className="about-me__portfolio-item">
              <a className="about-me__portfolio-link hover-opacity-link" href="https://github.com/thewayitshine/how-to-learn" target="_blank">
                Статичный сайт
              </a>
            </li>
            <li className="about-me__portfolio-item">
              <a className="about-me__portfolio-link hover-opacity-link" href="https://github.com/thewayitshine/russian-travel" target="_blank">
                Адаптивный сайт
              </a>
            </li>
            <li className="about-me__portfolio-item">
              <a className="about-me__portfolio-link hover-opacity-link" href="https://github.com/thewayitshine/react-mesto-api-full-gha" target="_blank">
                Одностраничное приложение
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;