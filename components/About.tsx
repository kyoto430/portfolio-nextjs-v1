import { motion } from 'framer-motion'
import Link from 'next/link'
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
      className="flex flex-col relative md:h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-center mx-auto items-center"
    >
      <h3 className="md:absolute md:top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        About me
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
            Hello! My name is Ruslan. I am 29 years old, born in Belarus, living in Minsk city.
          </div>
          <div>
            My development experience in web2 is more than 5 years.
          </div>
          <div>
            At the moment, I'm studying solidity, learning how to work with blockchain, participating in testnets and I'm also trying my hand as a content creator, writing threads and creating illustrations in my Twitter.
          </div>
          <div className="pb-0 md:pb-5 underline decoration-[#F7AB0A]/50">
            My goal is to move from web2 to web3 and contribute to the development of web3 technologies.
          </div>
          <div className="underline decoration-[#F7AB0A]/50 font-semibold text-xl">
            How can I be of help?
          </div>
          <p>
            - I am willing to work hard and learn new technologies to contribute to projects. I also have experience working in a team, and I know how to communicate and collaborate with my colleagues.
          </p>
          <p>
            - I am very interested and motivated in the opportunity to work as a blockchain developer.
          </p>
        </div>
        <Link href="https://docs.google.com/document/d/1_vszGGIEQSLJKfrjp13oI36A1A1tGBefJVMpHQzhWTM">
          <button className="heroButtonActive mt-1 md:mt-5">
            Download CV
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
