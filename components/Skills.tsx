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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6zQpp19EUKn4nSRkp2kfrkJxATH0Ah5m7g&s',
      process: '70%',
    },
    {
      id: '3',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      progress: '80%',
    },
    {
      id: '4',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      progress: '60%',
    },
    {
      id: '5',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
      progress: '70%',
    },
    {
      id: '6',
      logo: 'https://gulpjs.su/img/gulp-white-logo.svg',
      progress: '70%',
    },
    {
      id: '7',
      logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png',
      progress: '70%',
    },
    {
      id: '8',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      progress: '80%',
    },
    {
      id: '9',
      logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      progress: '50%',
    },
    {
      id: '10',
      logo: 'https://cns.by/images/img/staff/typescript-min.png',
      progress: '50%',
    },
    {
      id: '11',
      logo: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      progress: '50%',
    },
    {
      id: '12',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png ',
      progress: '30%',
    },
    {
      id: '13',
      logo: 'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png',
      progress: '30%',
    },
    {
      id: '14',
      logo: 'https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png',
      progress: '70%',
    },
    {
      id: '15',
      logo: 'https://avatars.mds.yandex.net/get-entity_search/5513561/551864585/S600xU',
      progress: 'Learning',
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
        Skills
      </h3>
      <h3 className="mb-8 md:absolute top-8 md:top-16 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to learn about the skills proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skill.map((element) => (
          <Skill skill={element} key={element.id} />
        ))}
      </div>
    </motion.div>
  );
}
