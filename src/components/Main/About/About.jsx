import React from 'react';
import './about.css';

const About = () => {
    return(
        <section className="info-about-wrapper">
            <div className="info-about">
               <div className="about-img">
                   <img src="https://static-eu.insales.ru/files/1/2420/5032308/original/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0.png" alt="about" />
               </div>
                <div className="about-description">
                    <p>
                        Пример текста виджета 'Текст и картинка'. В тексте вы можете разместить любую текстовую информацию,
                        вставить изображения, картинки и видео. Поддерживается форматирование.
                        Отредактировать этот виджет вы можете в режиме редактирования сайта.
                        Для перехода в режим редактирования нажмите кнопку 'Редактор сайта' в верхней панели.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;