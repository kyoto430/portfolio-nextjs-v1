import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  const work = [
    {
      id: '1',
      title: 'Верстальщик',
      place: '',
      logo: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
        'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        'https://prepros.io/assets/legacy/icon.png',
      ],
      points: [
        'Адаптивная вёрстка веб-сайтов',
        'Дизайн макетов',
        'SEO и PageSpeed оптимизация',
      ],
      date: 'Август 2018 - Июль 2021',
    },
    {
      id: '2',
      title: 'Junior Frontend Developer',
      place: 'Студент в Result School',
      logo: 'https://sun9-26.userapi.com/impg/wMe11qws7NDKzvVIwADpzBajvCKpKoQflpjGMA/TFCCXelqv-U.jpg?size=1033x1033&quality=95&sign=dec480d0b0a4945b93f42108dbf2f81d&type=album',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
        'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
        'https://camo.githubusercontent.com/438522ac26bb05c47b5a243f914d2dab7c49265b6ee09bbc7df43004f96754f6/68747470733a2f2f6432656970397366336f6f3663322e636c6f756466726f6e742e6e65742f746167732f696d616765732f3030302f3030302f3335392f66756c6c2f657870726573736a736c6f676f2e706e67',
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
    {
      id: '3',
      title: 'Junior Frontend Developer',
      place: '',
      logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
        'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      ],
      points: [
        'Практика по созданию пользовательских интерфейсов на React',
        'Освоение backend',
      ],
      date: 'Октябрь 2022 - по настоящее время',
    },
  ]
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
  )
}
