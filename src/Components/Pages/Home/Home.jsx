import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='Home_Info'>
            <div className="contein_Home_info">
                <ul className="List">
                    <li className="text">Створити у склонованій директорії [React проект](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) з назвою 'traffic-lights-5'</li>
                    <li className="text">Перенести попередню лабораторну</li>
                    <li className="text">В папці src створити папку "Pages", а в ній компоненту "Home", на якій буде висвітлюватися завдання лабораторної роботи</li>
                    <li className="text">В цій же папці стоврити компоненту "ErrorPage" реалізувавши в ній кастомний вивід інформації про помилку</li>
                    <li className="text">Cтворити компоненту "Header", в якій реалізувати меню(меню має містити два пункти "Горизонтальний сфітлофор" та "Вертикальний світлофор")</li>
                    <li className="text">В App додати компоненту "Header"</li>
                    <li className="text">В Підключти бібліотеку "react-roter-dom"; в "App" реалізувати наступні роути</li>
                </ul>
            </div>

        </div>
    );
}

export default Home;
