import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function WorkExperience({}: Props) {
  const work = [
    {
      id: '1',
      title: 'Frontend developer',
      place: 'Self-employed',
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
        'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png'
      ],
      points: [
        'UI Development: Building responsive and cross-browser compatible web pages using HTML5, CSS3, and JavaScript (ES6+)',
        'UX/UI Enhancement: Implementing interactive features (forms, modals, animations) to improve user experience and engagement',
      ],
      date: 'August 2018 - Present',
    },
    {
      id: '2',
      title: 'Frontend developer',
      place: 'WEB-RA',
      logo: 'https://web-ra.com/wp-content/uploads/2021/09/logo.png',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png'
      ],
      points: [
        'UI Development: Building responsive and cross-browser compatible web pages using HTML5, CSS3, and JavaScript (ES6+)',
        'Performance Optimization',
        'CMS Integration',
        'UX/UI Enhancement: Implementing interactive features (forms, modals, animations) to improve user experience and engagement',
        'Testing and Debugging',
        'Frameworks and Libraries: Utilizing Vue.js, jQuery, Laravel to supporting interactive elements and single-page applications (SPA)',
      ],
      date: 'September 2023 - January 2025',
    },
    {
      id: '3',
      title: 'Frontend Developer',
      place: 'Telegram App startup',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png',
      icons: [
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://photos.google.com/share/AF1QipNeGOjJIM5ohdPPVpJkPsrE870OWP0Inx8VLi2Mvs5pDpSGIRTl0nONHTOor0noPQ/photo/AF1QipNluMRWGabnDhLvQrq7LZZhTxvBFKenAh-ODvyO?key=dmJwaGtCS0R0Nk0zbjg5QWFGMVhZY25NT0ZJUXdn',
        'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png',
      ],
      points: [
        'Developed a user interface for a Telegram bot using React and Expo, ensuring an intuitive and visually appealing interaction experience',
        'Created responsive screens and navigation optimized for mobile devices',
      ],
      date: 'April 2024 (1 month)',
    },
    {
      id: '4',
      title: 'Junior Frontend Developer',
      place: 'Student at Result School',
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
        'Project "basket" with goods for an online store',
        'Web application for organizing events',
        'Team Project 1 - JavaScript Plugin "Context Menu"',
        'Team Project 2 - React website presenting the team of participants',
      ],
      date: 'July 2021 - February 2022',
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
        experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll mt-10 p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {work.map((element) => (
          <ExperienceCard exp={element} key={element.id} />
        ))}
      </div>
    </motion.div>
  );
}
