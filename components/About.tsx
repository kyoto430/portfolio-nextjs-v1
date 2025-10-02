import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col relative md:h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-center mx-auto items-center"
    >
      <h3 className="md:absolute md:top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Обо мне
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1667308023538-4cb333dc5034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        className="mb-10 mt-10 md:mt-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-2 md:space-y-5 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <div className="text-base">
          <div className="pb-0 md:pb-5">
            Мой опыт разработки составляет более 6 лет. За это время я
            реализовал проекты разного уровня сложности — от лаконичных
            лендингов до коммерческих веб-сайтов. Специализируюсь на аккуратной
            и семантической верстке с учётом адаптивности и кроссбраузерности.
            Имею опыт работы с CMS WordPress.
          </div>
          <div className="pb-0 md:pb-5">
            Обладаю навыками Frontend-разработки: пишу чистый
            JavaScript код, работаю с современными фреймворками.
          </div>
          <div className="pb-0 md:pb-5">
            В своей работе стремлюсь к pixel-perfect дизайну, читаемому и легко
            поддерживаемому коду, а также эффективному взаимодействию с
            UX/UI-дизайнерами и бэкенд-разработчиками для создания удобных и
            производительных продуктов.
          </div>
        </div>
        <Link href="https://docs.google.com/document/d/1hW12bu3LQ-g_zJZ9zpHAnwfqdVHcp-VMb8mDtzq8rx0/edit?usp=sharing">
          <button className="heroButtonActive mt-1 md:mt-5">
            Скачать резюме
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
