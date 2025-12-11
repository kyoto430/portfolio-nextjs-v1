import React from 'react'
import { motion } from 'framer-motion'

type Props = { exp: any }

export default function ExperienceCard({ exp }: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-3 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 md:hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 md:overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full md:w-[80px] md:h-[80px] object-cover object-center"
        src={exp.logo}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-3xl font-light">{exp.title}</h4>
        <p className="font-bold text-sm md:text-xl mt-1 pb-5">{exp.place}</p>
        <div className="flex flex-wrap space-x-2 my-2 items-center justify-center">
          {exp.icons.map((element: any, index: any) => (
            <img
              key={index}
              className="h-10 w-10 rounded-full"
              src={element}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{exp.date}</p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          {exp.points.map((element: any, index: any) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
