import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function WorkExperience({}: Props) {
  const work = [
    {
      id: '1',
      title: 'Web Developer',
      place: 'Фрилансер',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
        'https://gulpjs.su/img/gulp-white-logo.svg',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png',
      ],
      points: [
        'Разработка пользовательского интерфейса: Создание адаптивных и кроссбраузерных веб-сайтов с использованием HTML5, CSS3 и JavaScript (ES6+)',
        'Улучшение UX/UI: внедрение интерактивных функций (форм, модалов, анимации) для улучшения взаимодействия с пользователем и повышения его вовлеченности',
      ],
      date: 'Август 2018 - по настоящее время',
    },
    {
      id: '2',
      title: 'Frontend Developer',
      place: 'Веб-агенство WEB-RA',
      logo: 'https://web-ra.com/wp-content/uploads/2021/09/logo.png',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png',
      ],
      points: [
        'Разработка пользовательского интерфейса: Создание адаптивных и кроссбраузерных веб-страниц с использованием HTML5, CSS3 и JavaScript (ES6+)',
        'Оптимизация производительности',
        'Интеграция с CMS',
        'Улучшение UX/UI: Внедрение интерактивных функций (форм, модалов, анимации) для улучшения взаимодействия с пользователем и повышения его вовлеченности',
        'Тестирование и отладка',
      ],
      date: 'Сентябрь 2023 - Январь 2025',
    },
    {
      id: '3',
      title: 'Frontend Developer',
      place: 'Разработка приложения для Telegram',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://lh3.googleusercontent.com/pw/AP1GczNClBs9EaenMJ3jqVRDFjpJWAi_giL3GjPjw_cvHgVW_OiCDioprGtjtAvInONcIUA3QTxUXZU9PZKEKxZhBhL80eAHyYfjQop4-bE7Pi5N7G6YyAP7lPXRcMCPycNfm1vOkJWptRJ7FrY1dOTGwjL5=w1024-h914-s-no-gm?authuser=0',
        'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png',
      ],
      points: [
        'Разработал пользовательский интерфейс для Telegram-бота с использованием React и Expo, что обеспечивает интуитивно понятный и визуально привлекательный интерфейс взаимодействия',
        'Создал адаптивные экраны и навигацию, оптимизированные для мобильных устройств',
      ],
      date: 'Апрель 2024 (1 месяц)',
    },
    {
      id: '4',
      title: 'Junior Frontend Developer',
      place: 'Студент в Result School',
      logo: 'https://sun9-26.userapi.com/impg/wMe11qws7NDKzvVIwADpzBajvCKpKoQflpjGMA/TFCCXelqv-U.jpg?size=1033x1033&quality=95&sign=dec480d0b0a4945b93f42108dbf2f81d&type=album',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
        'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
        'https://i.imgur.com/Dns5wR8.png',
        'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png',
        'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png',
      ],
      points: [
        'Проект «корзина» с товарами для интернет-магазина',
        'Веб-приложение для организации мероприятий',
        'Командный проект 1 - JavaScript-плагин «Контекстное меню»',
        'Командный проект 2 - Cайт на React, презентующий команду участников',
      ],
      date: 'Июль 2021 - Февраль 2022',
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="md:h-screen flex relative md:overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Опыт
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll mt-10 p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {work.map((element) => (
          <ExperienceCard exp={element} key={element.id} />
        ))}
      </div>
    </motion.div>
  );
}
