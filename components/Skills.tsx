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
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      progress: '60%',
    },
    {
      id: '4',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
      progress: '70%',
    },
    {
      id: '5',
      logo: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png',
      progress: '70%',
    },
    {
      id: '6',
      logo: 'https://camo.githubusercontent.com/39bbefb1bf36e167b3a2699997e04505e96f5ead6d6f4004b50b33859f1ca4d9/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667',
      progress: '50%',
    },
    {
      id: '7',
      logo: 'https://prepros.io/assets/legacy/icon.png',
      progress: '90%',
    },
    {
      id: '8',
      logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      progress: '80%',
    },
    {
      id: '9',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      progress: '80%',
    },
    {
      id: '10',
      logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      progress: '50%',
    },
    {
      id: '11',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
      progress: '30%',
    },
    {
      id: '12',
      logo: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      progress: '50%',
    },
    // {
    //   id: '11',
    //   logo: 'https://camo.githubusercontent.com/438522ac26bb05c47b5a243f914d2dab7c49265b6ee09bbc7df43004f96754f6/68747470733a2f2f6432656970397366336f6f3663322e636c6f756466726f6e742e6e65742f746167732f696d616765732f3030302f3030302f3335392f66756c6c2f657870726573736a736c6f676f2e706e67',
    //   progress: '30%',
    // },
    // {
    //   id: '12',
    //   logo: 'https://i.imgur.com/Dns5wR8.png',
    //   progress: '30%',
    // },
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
    // {
    //   id: '15',
    //   logo: 'https://avatars.mds.yandex.net/i?id=883d95e7870d742c9afaccce81e84f886d544248-5244793-images-thumbs&n=13',
    //   progress: 'Новое',
    // },
    // {
    //   id: '16',
    //   logo: 'https://cns.by/images/img/staff/typescript-min.png',
    //   progress: 'Новое',
    // },
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
