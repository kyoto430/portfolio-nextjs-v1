import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-2 md:p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <SocialIcon
          url="https://instagram.com/ruslan_prakapets"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://t.me/Kyoto430"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://x.com/Akashi430"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/kyoto430"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://codewars.com/users/Kyoto430"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex-row items-center text-gray-300 cursor-pointer hidden md:flex"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase md:inline-flex text-sm text-gray-400">
          <Link href="#contact">Contact me</Link>
        </p>
      </motion.div>
    </header>
  )
}
