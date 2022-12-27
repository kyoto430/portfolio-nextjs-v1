import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="mb-0 mt-10 md:mt-0 md:mb-10 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-0 md:space-y-5 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <div className="text-base">
          <div className="pb-0 md:pb-5">
            Привет, меня зовут Руслан. Я родился в Беларуси, живу в г.Минске.
          </div>
          <div>
            С 2018 года - по настоящее время, я занимаюсь вёрсткой веб-сайтов.
          </div>
          <div>В 2021 году начал изучать JavaScript и React.</div>
          <div className="pb-0 md:pb-5">
            В 2022 году окончил курс Junior Frontend разработчика, где получил 6
            месяцев опыта разработки приложений.
          </div>
          <div className="underline decoration-[#F7AB0A]/50 font-semibold text-xl">
            Чем я могу быть полезен?
          </div>
          <p>
            - Помогу научиться верстать веб-сайты на стеке: HTML, CSS,
            JavaScript.
          </p>
          <p>- Помогу разработать веб-сайт в комерческих целях.</p>
          <p>
            - С удовольствием присоединюсь в команду разработчиков на React.js
            для решения различных задач в силу своих знаний и получения опыта
            разработки.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
