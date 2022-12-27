import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = { project?: any; length?: any }

export default function Project({ project, length }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-20 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={project.image}
        alt=""
        className="w-[300px] md:w-[500px]"
      />
      <div className="space-y-3 px-0 md:space-y-2 md:px-10 max-w-6xl">
        <h4 className="text-1xl md:text-2xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Учебный проект {project.id} из {length}:
          </span>
          {project.title}
        </h4>
        <div className="flex items-center space-x-2 justify-center">
          {project?.technologies.map((technology: any, index: any) => (
            <img className="h-10 w-10" key={index} src={technology} alt="" />
          ))}
        </div>
        <p className="text-lg text-center md:text-left">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <Link href={project.link} target="_blank">
            <button className="heroButton">Live</button>
          </Link>
          <Link href={project.gitLink} target="_blank">
            <button className="heroButton">Исходный код</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
