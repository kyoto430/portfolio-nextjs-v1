import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  const skill = [
    {
      id: '1',
      logo: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
      progress: '90%',
    },
    {
      id: '2',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      progress: '80%',
    },
    {
      id: '3',
      logo: 'https://lh3.googleusercontent.com/pw/AP1GczNYdN08WYZzuQrW-3yopPsTeTB0fd3Z_oD-PMfQxFeYQihSOexGG4uqk0b5omphK9TuE6scfYerEsq5okab9zHBRjIoiXSKrXpekrKaL-Gagf_d_N65G-lqaDPB7jBQi2dAzs8Ino0_BiVSjPxytGrw=w512-h512-s-no-gm?authuser=0',
      progress: '50%',
    },
    {
      id: '4',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
      progress: '60%',
    },
    {
      id: '5',
      logo: 'https://gulpjs.su/img/gulp-white-logo.svg',
      progress: '70%',
    },
    {
      id: '6',
      logo: 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      progress: '70%',
    },
    {
      id: '7',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
      progress: '60%',
    },
    {
      id: '8',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      progress: '90%',
    },
    {
      id: '9',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      progress: '70%',
    },
    {
      id: '10',
      logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      progress: '50%',
    },
    {
      id: '11',
      logo: 'https://cdn-icons-png.flaticon.com/512/919/919832.png',
      progress: '50%',
    },
    {
      id: '12',
      logo: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      progress: '50%',
    },
    {
      id: '13',
      logo: 'https://lh3.googleusercontent.com/pw/AP1GczNClBs9EaenMJ3jqVRDFjpJWAi_giL3GjPjw_cvHgVW_OiCDioprGtjtAvInONcIUA3QTxUXZU9PZKEKxZhBhL80eAHyYfjQop4-bE7Pi5N7G6YyAP7lPXRcMCPycNfm1vOkJWptRJ7FrY1dOTGwjL5=w1024-h914-s-no-gm?authuser=0',
      progress: '50%',
    },
    {
      id: '14',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
      progress: '30%',
    },
    {
      id: '14',
      logo: 'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png',
      progress: '30%',
    },
    {
      id: '15',
      logo: 'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png',
      progress: '70%',
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="md:absolute md:top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Навыки
      </h3>
      <h3 className="mb-8 md:absolute top-8 md:top-16 uppercase tracking-[3px] text-gray-500 text-sm">
        Наведите указатель мыши на навык, чтобы узнать о владении навыком
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skill.map((element) => (
          <Skill skill={element} key={element.id} />
        ))}
      </div>
    </motion.div>
  );
}
