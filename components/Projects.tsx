import React from 'react';
import { motion } from 'framer-motion';
import Project from './Project';

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      id: '1',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczMsJ7bUQSxaXg2WI50MIwI7YJ_JbY97cXy4YVqcE3eTWB7o4TAgOocKiLQQV-sOWEREMV5KsWPFzsV4j6aw6--AQlYm6N42kFwS4TU7FJ3BOHw09V7zHanrCknjwpYOP47mH2wZo9nFJ6_Izo66vge_=w1123-h778-s-no-gm?authuser=0',
      title: 'Гольфстрим',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
        'Данный проект представляет собой веб-сайт, разработанный для Golfstrim-Kazan, компании, предлагающей широкий спектр услуг в области путешествий и туризма. Веб-сайт отличается лаконичным профессиональным дизайном и удобной навигацией для представления предложений компании, включая турпакеты, туристические услуги и отзывы клиентов. Полностью адаптивный, он обеспечивает бесперебойную работу на всех устройствах, позволяя посетителям легко просматривать и бронировать услуги. Цель веб-сайта - улучшить взаимодействие с пользователями, отражая приверженность компании качественному обслуживанию и удовлетворенности клиентов.',
      link: 'https://golfstrim-kazan.ru/',
      gitLink: 'https://github.com/kyoto430/golfstrim',
    },
    {
      id: '2',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczOs6ma0yfgEg3x1CHVurdIXllWzafHOHeZjlcvcL2YOXHNMQUNIYHBZibUr69LWL2Cg7icqOiuf1lhZDg5xHeEJcwzD8-97EJpzVPlMwKEQF7r9a0Y2YjvZ_HaKWylLLAF6wFugqPQavzBuqzG37seG=w1123-h778-s-no-gm?authuser=0',
      title: 'Автошкола Город дорог',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой удобный веб-сайт, разработанный для автошколы и предназначенный для предоставления необходимой информации о курсах, расписании и регистрации. Веб-сайт отличается чистым и современным дизайном, интуитивно понятной навигацией и адаптивным макетом, что обеспечивает удобство работы на всех устройствах. На сайте представлены предложения школы, в том числе уроки вождения, сертификаты и дополнительные услуги, что позволяет создать профессиональную онлайн-аудиторию, позволяющую потенциальным студентам легко ознакомиться с программами и зарегистрироваться.',
      link: 'https://kyoto430.github.io/avto-school/',
      gitLink: 'https://github.com/kyoto430/avto-school',
    },
    {
      id: '3',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczMEJd6nXqS1VrF-ndeM4BKdTYL-BBYEgh2I720zC_rw37-YJFFeTiKE05GDrK2aY9Syz_sOLZw5egXZIhwy_-6Ve4SXnfHIdf87BtAZIwdXZmyKEDAUb-n2OFKVUs83lI4LexAYlr1qOaLGIDzouuCx=w1123-h778-s-no-gm?authuser=0',
      title: 'ОКОНТИБРАВО',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
        'Этот проект представляет собой рекламный веб-сайт, разработанный для ОКОНТИБРАВО и предлагающий современную и визуально привлекательную презентацию услуг компании. Веб-сайт ориентирован на предоставление понятного и удобного для навигации контента, демонстрирующего ценности и предложения бренда. Полностью адаптивный дизайн обеспечивает удобство просмотра на различных устройствах, сочетая функциональность и эстетическую привлекательность для эффективного привлечения пользователей. Общий дизайн отражает профессиональный подход компании и ее приверженность предоставлению высококачественных услуг.',
      link: 'https://kyoto430.github.io/okontibravo/',
      gitLink: 'https://github.com/kyoto430/okontibravo',
    },
    {
      id: '4',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczNg1zul_MXFKsMp0lRfthHWmnvPAMZDbAjrKCjYmLIWEWQYW2cijf6u72VxY08LdbjzvmvgQQLGQ_1egglmx_7CeM0IN9kMSUpa9HNxJbkpkPtPN5J9FFpik58AwHEYnVGaK0GAFfFprZYey6FF0VBF=w1123-h778-s-no-gm?authuser=0',
      title: 'CT',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой современный веб-сайт, предназначенный для представления бренда CT, демонстрации его услуг и решений. Веб-сайт отличается чистым минималистичным дизайном с акцентом на простоту навигации и вовлеченность пользователей. Он полностью адаптивен, обеспечивая оптимальное качество просмотра на всех устройствах, и представляет предложения компании в простой и визуально привлекательной форме. Цель сайта - создать профессиональное онлайн-присутствие, отражающее приверженность бренда качеству и инновациям.',
      link: 'https://kyoto430.github.io/CT/',
      gitLink: 'https://github.com/kyoto430/CT',
    },
    {
      id: '5',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczMHoSRakgxR_rizCojwmE3viQWFPMG3FJq-QU_XvxYZtQ8KgbiDeURq7izztDkb5DtTtDbVF0wsxUep_8KTgpMh1-o6LsoBxqqQUrcxyp38VC7X_3nPj2rMEI_cvSyRkRNDg5iaL0D_b7lL4gLi3rzg=w1123-h778-s-no-gm?authuser=0',
      title: 'Cargoff',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      link: 'https://cargoff.com/',
      description:
        'Данный проект представляет собой корпоративный веб-сайт, разработанный для логистической и транспортной компании Cargoff. Веб-сайт отличается лаконичным профессиональным дизайном, который подчеркивает услуги, опыт и приверженность компании повышению эффективности в сфере логистики. Адаптивный дизайн веб-сайта обеспечивает удобство работы пользователей на всех устройствах, предлагая легкий доступ к подробной информации об услугах, контактной информации и ценностям компании. Дизайн подчеркивает функциональность и доверие, что соответствует миссии компании по предоставлению надежных и эффективных логистических решений.',
      gitLink: 'https://github.com/kyoto430/cargoff',
    },
    {
      id: '6',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczMFO7I1GaMRbq1R-pR-SQtgEXZ7NhFGtpY2mvYjhbMtApj0qA-g2K-JtKUTFgPP6LKpygIxDplNlZwg3BlWMjRM1onyRIOAOdiKQzZMYuHJbZnsx7YcEjZDgQuFJUgCWoiZiX1VfmsVB-AaLhuiHEjT=w1123-h778-s-no-gm?authuser=0',
      title: 'Design Yulia Nesterenko',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой веб-сайт в стиле портфолио, созданный для демонстрации архитектурных проектов. Сайт отличается чистым современным дизайном с акцентом на высококачественные изображения и подробные описания проектов. Разработанный таким образом, чтобы быть полностью адаптивным, он обеспечивает плавный и привлекательный пользовательский опыт на различных устройствах. Веб-сайт подчеркивает архитектурный опыт компании, представляя ее работы в визуально привлекательном виде, который отражает профессионализм и креативность в области архитектуры.',
      link: 'https://kyoto430.github.io/architecture/',
      gitLink: 'https://github.com/kyoto430/architecture',
    },
    {
      id: '7',
      image:
        'https://lh3.googleusercontent.com/pw/ABLVV874rJvAaDYu45oB2gxplqHs8xF6JZhqMkN_V-hi6iYWALE-cg8UJ9-8SS7WQFwa35nbftwItQtCp1RezR3X3avFpp4yNuFp9YGUq_VDL1ysw7HguDLc37Sa9qGmF_PF-vFTFZAPULVSu-peZ8-1zdVX=w957-h663-s-no?authuser=0',
      title: 'Кавказский паломник',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
        'Этот проект представляет собой туристический веб-сайт, созданный для продвижения туров по Кавказскому региону. На веб-сайте представлена подробная информация о различных турах, направлениях и впечатлениях, с акцентом на визуальную привлекательность и вовлеченность пользователей. Современный адаптивный дизайн обеспечивает удобство просмотра на всех устройствах. Сайт рассказывает о красоте и разнообразии Кавказа, предоставляя посетителям необходимую информацию для легкого и увлекательного планирования своих путешествий.',
      link: 'https://www.kavkaz-palomnik.ru/',
      gitLink: 'https://github.com/kyoto430/kavkaz-tour',
    },
    {
      id: '8',
      image:
        'https://lh3.googleusercontent.com/pw/ABLVV86EbyVoKMZHNELMhKL8w1AInHk7CVASWY22SdbkV_DtsIhQ6mNfmdJzvF1vgid0A8yy-MOWIHsCAfdwqJeKUm2KEbAfmDIEqJ5e_3fEAs1yG4T7OvvbMbPIBkSQ0dSEvTlbvLZ1_VXjRJZDkvjtk_K1=w957-h663-s-no?authuser=0',
      title: 'Tachlab',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой элегантный и современный веб-сайт, предназначенный для демонстрации их инновационных решений и услуг. Веб-сайт выполнен в минималистичном стиле с акцентом на понятный дизайн и удобную навигацию. Его адаптивный дизайн обеспечивает оптимальную производительность на всех устройствах, предоставляя пользователям плавный и привлекательный интерфейс. Общая эстетика выполнена на профессиональном уровне, в соответствии с технологическим опытом и дальновидным подходом компании.',
      link: 'https://kyoto430.github.io/tachlab/',
      gitLink: 'https://github.com/kyoto430/tachlab',
    },
    {
      id: '9',
      image:
        'https://lh3.googleusercontent.com/pw/ABLVV85-sgkbN9ayvPY4cO5bLmfAzDvhcPlyKHlZlrI5UVvPahSSlciPhEXkuvTPgbhY8AFnM71QlkzqGvjb7CA-eKZqLXp2Y3CB-U8fO3xuwS0OflTZZddLJRk4oK9q9xSQqmaltqxSgha8z1-jR3oj_FwP=w957-h663-s-no?authuser=0',
      title: 'Toshibu VPN',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой веб-сайт, разработанный для продвижения VPN-сервиса, рассказывающий о его функциях, преимуществах и возможностях обеспечения безопасности. Дизайн сайта выполнен в элегантном и современном стиле с акцентом на понятность и простоту навигации. Он предоставляет пользователям необходимую информацию о VPN-сервисах, обеспечивая удобство просмотра на различных устройствах. Адаптивный дизайн, наряду с профессиональной эстетикой, подчеркивает безопасность, конфиденциальность и надежность.',
      link: 'https://toshibuvpn.ru/',
      gitLink: 'https://github.com/kyoto430/vpn',
    },
    {
      id: '10',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczPOteDeizLi6C-tiEdQtKAIPMODNSgW9E6WJRXJ7kqGj9Hwxn0o2XA7KP5fE2LYmBlmSKvvZS8zdPhT0WHwK36c9-IB8CfWlLUHFj7yU61u0hT6s7lB_6uRkx9VhH-yX9CZsC65Q0vufy_zgtrqxEzh=w1123-h778-s-no-gm?authuser=0',
      title: 'Finspace',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой профессиональный веб-сайт, созданный для компании, предоставляющей финансовые услуги, с целью представления их предложений и опыта в финансовой отрасли. Веб-сайт отличается чистым современным дизайном с акцентом на удобную навигацию и понятное представление услуг. Его адаптивный дизайн обеспечивает беспрепятственный доступ к различным устройствам, сохраняя при этом изысканный внешний вид, который отражает нацеленность компании на финансовые решения и инновации.',
      link: 'https://xn--80aafbnp9abdgbbdjpbjhdqez.xn--p1ai/',
      gitLink: 'https://github.com/kyoto430/finspace',
    },
    {
      id: '11',
      image:
        'https://lh3.googleusercontent.com/pw/ABLVV86-12SLSkVy-syGO_FhbGuxe96_wjmd0xWwIPADVKopFjI6g9hvCWe781J-CPJZkovfdLcJz2M-hlffGaZybNabN4yiITB6gm2oDkqAGGRg3bTfN2VL1MNYraPHj3B1NXdnPaTuDqqw81JN0ZTVGmYa=w957-h663-s-no?authuser=0',
      title: 'Кряшенская духовная миссия',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой культурный веб-сайт, посвященный традициям и наследию кряшенской общины. В дизайне особое внимание уделяется ярким визуальным эффектам, привлекательному контенту и интуитивно понятной навигации, чтобы подчеркнуть богатство культуры. Веб-сайт полностью адаптивен, обеспечивая доступность и удобство работы на различных устройствах, сохраняя при этом современную эстетику, которая дополняет историческую и культурную тематику.',
      link: 'https://kyoto430.github.io/kryashenskaya/',
      gitLink: 'https://github.com/kyoto430/kryashenskaya',
    },
    {
      id: '12',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczPh_i83ePuA1_7L8wwwvMZA961ywZTtxYprI3QfZTOD6tvEbPOEgR78OaGWJDpt1k5ivOxAm58t-OOeOxmlIlkUa882maytJwJmqOmeVzE9dZiSvHCWaU2SH1bVSmGvFShryXKNm7yc-96EiDXOeskS=w1123-h778-s-no-gm?authuser=0',
      title: 'Osetr fish',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой рекламный сайт для компании, занимающейся производством морепродуктов, предназначенный для демонстрации их продуктов и услуг. Веб-сайт отличается чистым и современным дизайном, с акцентом на высококачественное визуальное оформление и интуитивно понятную навигацию. Адаптивный дизайн обеспечивает оптимальное взаимодействие с пользователем на всех устройствах, подчеркивая приверженность компании качеству и профессионализму в индустрии морепродуктов.',
      link: 'https://kyoto430.github.io/osterfish',
      gitLink: 'https://github.com/kyoto430/osterfish',
    },
    {
      id: '13',
      image:
        'https://lh3.googleusercontent.com/pw/AJFCJaXkF_Lt1E4EIHnzQ200XhTRVq9FlMQoyiEnku_r1gfm9baPB7Bi4SQlSmIhj2hb904xz6H8ZUu-d6MS22CfuXyhwPoFtCv1X50JammuFBbms5uVGx9bSdZcbR1QT9pDXJoZMm5ubQMuvjk3zYgxE8XD=w1123-h778-s-no?authuser=0',
      title: 'Астрология',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      ],
      description:
        'Этот проект представляет собой визуально привлекательный веб-сайт, посвященный энтузиастам астрологии. Сайт предназначен для предоставления пользователям информации по астрологическим темам в привлекательной и интуитивно понятной форме. Благодаря адаптивному дизайну и удобному интерфейсу веб-сайт обеспечивает беспрепятственный просмотр на всех устройствах, демонстрируя современную и мистическую эстетику, которая перекликается с темой астрологии.',
      link: 'https://kyoto430.github.io/astrology/',
      gitLink: 'https://github.com/kyoto430/astrology',
    },
    {
      id: '14',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8taBF_dv4rqktCLr4uxSDSPRFGsHt43ajPVl_e81frqNtGiSqoFEARet_iGrnjvOGPgY4-JIFXTp4A82gQMKhl-hdGlfwWVhev_cyTwMp6Dd3NSwzT3HgZ2R8mfhCHJVtDkfNJwzKkPR9-Xh6TylNO=w957-h663-s-no?authuser=0',
      title: 'Балтсервис',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Этот проект представляет собой корпоративный веб-сайт, разработанный для компании, ориентированной на предоставление услуг, для представления своих бизнес-предложений и создания присутствия в Интернете. Веб-сайт отличается четким и профессиональным дизайном, интуитивно понятной навигацией и адаптивной функциональностью, что обеспечивает беспрепятственный доступ на разных устройствах. Его основное внимание уделяется эффективному распространению опыта компании и обеспечению легкого доступа к контактной информации для потенциальных клиентов.',
      link: 'https://kyoto430.github.io/baltserivce/',
      gitLink: 'https://github.com/kyoto430/baltserivce',
    },
    {
      id: '15',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc84HzeNyvPwHyhyUfEbvu7qlszd4mG72Za1KLC1oQePW_pHkPtZJFRmqo_qXD_6sue9qgTio2vDfvzAlRBjbGsoDK4xWwLIDab2h472PKqCKPgQk-1JbOf39hlLcnMeo-yLrBYbXeZUtRhlIlcUy9fN=w957-h663-s-no?authuser=0',
      title: 'Сибирь',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      ],
      description:
        'Данный проект представляет собой рекламный веб-сайт. Сайт отличается визуально привлекательным дизайном, привлекательными изображениями и удобной навигацией, что обеспечивает посетителям ощущение полного погружения. Разработанный с использованием адаптивного дизайна, он обеспечивает оптимальную производительность и доступность на различных устройствах, демонстрируя как современную эстетику, так и функциональность."',
      link: 'https://kyoto430.github.io/syberia/',
      gitLink: 'https://github.com/kyoto430/syberia',
    },
    {
      id: '16',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc_d494cGgckTq7h1GJsavYZ6Jww0B7JyMVpKYvtSlTPcaBoVbY24ogp1IxEKBXxyJXJJQk3S7YWKyusto_qBXp153svfuzlbfq8jm8RIAHz6yF5CRQ8dHBnpnryQ0PgNuihV9H2eGQIF_bufQyvl0rg=w957-h663-s-no?authuser=0',
      title: 'Система безопасности',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      ],
      description:
        'Этот проект представляет собой адаптивный веб-сайт для компании, предоставляющей услуги в области безопасности, разработанный для демонстрации их предложений и создания онлайн-присутствия. Веб-сайт предоставляет подробную информацию об услугах и опыте компании.',
      link: 'https://kyoto430.github.io/security/',
      gitLink: 'https://github.com/kyoto430/security',
    },
    {
      id: '17',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczMGetIFeVa-lIN6r2diwoIyL9KBXEqJp7RUlgFwC7YEfb3qy-SXXv4T7EC1wPfwdcsS9CN1UXoVknOJIHNbNFoFSd0Sbvf7uJppF5qzIIbBMqUh4ENsH1x8T85hCGZ7kIZjr7AZ-rV64ULF-oTTsbO2=w1123-h778-s-no-gm?authuser=0',
      title: 'Shelter',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'Веб-сайт Shelter, учебный проект в рамках Rolling Scopes School. Реализован следующий интерфейс: слайдер, меню для бургеров, модальные окна, разбивка на страницы. Реализован адаптивный дизайн для мобильных устройств.',
      link: 'https://rolling-scopes-school.github.io/kyoto430-JSFE2023Q1/shelter/index.html',
      gitLink: 'https://github.com/rolling-scopes-school/kyoto430-JSFE2023Q1',
    },
    {
      id: '18',
      image:
        'https://lh3.googleusercontent.com/wg799ot1vM3lrsI4W5fjDRnh56N5v_gmvTgEX5NQJrUq2Ny_b7I6OyXoZZhI8xNV7-Z625KnCDj3iQBB5ZtSTxRZN6wNn4Nn1JqPt2RKMFtAScNlAR4dIkdex7lVo-WHxH88aX0eigGDBQqQVKqund644kefehK8HVCQKbtI9t1fWXt5dr__QbihM5tLGtA5DfxCqkYfQf-DCeFWXJ7rdmy5RXdyQwn94Ms3Gjdtmn9f03fhydIolgJNF7Bs4Nh5OH9XofDWe1vWLN_rsAnQ3jweSzSyptBECN7w7FP8d_wRnzujCKGt7FFtD4ttOi9Q4XUg5W_BkPF_1PcUxobhANSaWu5UObUE0rAL0_aV_aXSlNYKjKcgkjyniXprpwoxbpHQbyaPbMOMFh8BDX0yrVKak9lZp5B_sOI5zqsKgcRSoJe9_CYjvnRecrpznhZMJTmp98LLT9qnx3YLb14toScys558ewtEMh2PGPcOX2_ejJu9MBVc-P6m43Kp7Oahb_2vpad7wArmVWbEKX03dfkthaUlc1J5rRSb80yJoNGPIyQCqIp_Da6LA9pqOiakUjjQXKwWFHnZaXaxrSUdYpk2bqnpYJn8awJEz67iTARvwh8ouVe0QhpE8iZ3LBpDDYdlX2aRyaRg9aaHReaTg_6MwlSxXHJxKdUV6N1ib0OGwDZokzBDOghQwQSJejOsSjKtnNjNATOzTAvGW6MLfccb5i3wk0bJNQ1KCP-HOpqIo_4wt54WRPx-399yJbJCauhzIMIy5Q6RS5WLSksiygYmEmMHfARy28DZKEL4X0iqchsiCGmnbvOH2KPHoP2Lchc61oZ2ObMe0AsdMePZcmvWaGEkFXYF0vmkMwwBXt5SA9BExTqYxtgIrH-B8zmQphct73gVjmepH_XFjEhmiV9LIixzLqN7g0ZMT131i-bb1H6jpiGW5LULzRpRgXemP0M2DINYkxLL7dy0Fx4TrA=w1123-h778-no?authuser=0',
      title: 'Командный веб-сайт',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      ],
      description:
        'Cайт на React, презентующий команду участников. Реализован следующий функционал: личные карточки участников, добавление и удаление из избранных и страница комментариев. Реализован адаптивный дизайн под мобильные устройства.',
      link: 'https://orlovaleksandr89.github.io/hakaton',
      gitLink: 'https://github.com/orlovaleksandr89/hakaton',
    },
    {
      id: '19',
      image:
        'https://lh3.googleusercontent.com/w36qoEtSQ_0vPl-Jfw3hRRge7VBTIKiknM1ti_aU3p4j7gosOyaWXdM4Af0MGxcPvp_0Z-T_a8I6QTIanoEEnbmgU4Y2a7Kdb9AOasnVxN1PjHdwzb6DiAuTqU-7tgMvm6YrE140537uQvYzYrV_Tn7KziD4YXRm8fAOQzrm2w4febQFezM1y7exfCCJTOXAScI58Iar6Yo6GGrM_wJ_YFHQ6GaTC_ce5TZ5hA92lXbh8iEhx_lvTk8brfNhxI0VbPmKNXdelqwviGvZW9j3dUuUDbomcGWvai9xp4nx3UGObBlc8HRUFHa5NKWEyGsgf7MJg-l3Bwt96AIOoDSw6GrDBkW3u8OrjtYQBhXyRJqOJpgJ8H_-mP2iZc2af0rad2cEbmP5Th_muFI1dj003GSn9zEfdNdvGYih_B7AcHlOpVIiE0dnAZdK89dbyc2LnN7v3EBey9lntQapBY7SJCJdG0EoHuZYQj2WRjvpGvYXfzr7e4qQeTj5LSe0ggJ89R4JSPzObZsQ3BkzQciusYsqOrtErm5V71JeN5SeFTnvFd2Crh39FOgeRDETt6FVySy5pEXvhMN7cYHJcNqf2NKmwjNpnUUH0_ze7SNzGNGWxSt0HILU2tSdcVQEC12uTfcHMRo35Y13obdcthDiVkF_tsmvnnpqPalygNZSIpbeyjMQTamqGMq0uHs--y2mbaGjviL6lvuBa2MbwuIrYRTFHr8r6gef_jhnf9bF2CO3LO6V6gHnZMASNbsfrbUSwFnmt0auSskBbx6Y35kAPyQbZ5L0tv_-hivaVEyBwMBJtwpzye894piL0PWLsivs13LhpajWYTRXRFDoCs1VFOw-R58HW7PvemGyoSAh8phQ4ccO4d8l9wEWc3wFChswSfhwyWQP0Vw1IXUxztFy63BdPnCyfsbeazjsq8PU7jg3oSYz3RGJBpjEN4dQG4mdYaZeUaJ6fNXIYM5ZJ7nKCw=w1123-h777-no?authuser=0',
      title: 'Веб-приложение для организации мероприятий',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
        'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
        'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png',
      ],
      description:
        'Веб-приложение для организации мероприятий имеет следующий функционал: регистрация и авторизация пользователя в приложении, личная страница пользователя с возможностью редактирования данных, страница с проходящими мероприятиями, страница с зарегистрированными участниками, личные страницы участников с комментариями, страница для добавления нового мероприятия, корзина товаров. Также реализованы функции: сортировки, поиска, фильтрации, пагинации, валидации полей.',
      link: 'https://kyoto430.github.io/final-fast-company/',
      gitLink: 'https://github.com/kyoto430/final-fast-company',
    },
    {
      id: '20',
      image:
        'https://lh3.googleusercontent.com/IAua3SHquDJcxd3_hRPyHjrqMcwS2FlAkTflHA7QQmk1EeKXVsil8soDk4bzc0NpWWkhhGHYZbS6b3dipgugiDQlw2o-BFuYh1BM53mQuCk_bzGht2X4zKLlnINlCFbbRpWWaaBYacu9B_M4idItlQ0RbgcxJuDvuLLeiGF3h48pM346WEKyURqbzneOuBeV-WeNu3il5ztg30RXGEewPsvhaS8a47rz2RtkB0y1lcf71EOSnVANCViNRwhwT8Jfc8NCFsjMUvu2YEBvuzipZfqS2rGTvby0g8qZPNwmSVLp3tFzKqOcDP5E2HdSnJNKTBV6oD1veEAb19zGcuQNspBp0u85jQ23gukGRNs4QQDc2IsRmgv1VwHlRgfUh4N1e0uXuf5L5hLls0CqUUqfe_9UmsiwTNnI3MV4zq2EySTAd43AbZ3Wu7MwAs4kCqgce7I6YK_m2n48dujmTTzJ0GQNFPEzpBzHiNXIaZfUMefF6WyK2KSTahuvPir4kX_Y51D4yt7MrQrTj1ONw8o9jx4yEUzKNxAtrXaClNncPtSn1SxK2mwBVl895zLctmZ3cCc2kOIkFS7In66sbIRM8YHlC0rzHLtJYByGBX9T-iLBBWwQXjaKdbnRLXOP0jRqh-9U0d_Nzj0yIGptgB0ix6S3EM-JT4cDvJb8LsfOKGTXXWFsF5tPuVVlSaLyoCMzeDV-JqAEWam4rjEoMMuGo2jQQwFmFQsOe3E0H7M7uLWNmtyMzIlC0xSPIY4UpS_VZhmgCak9xctnELboyGU5NkeiVwtIozR-CwARe78uu-OHkeyrylu0sgjYLXvkFdz51bPx9iJwu5ya69kanuKaTNvLb2x_oKyOwFuuzU6LITlRe3aU4nMSJTdjTDrRI8ixDpL--4bt9OAwPt8c-tK1GcRpRLlD7l4MSHTFNjrmpXOsNH1_GjsCRSbIqYfggLT1q5qBYBkSDKCM2ijXMx4WcA=w1123-h778-no?authuser=0',
      title: 'Сайт Vintage Cars',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      ],
      description:
        'Сайт разработан без использования дополнительных плагинов. Дизайн разработан самостоятельно в Figma, картинки взяты с unsplash. Реализован следующий интерфейс: слайдер, тултипы, меню-бургер, анимации всплытия. Реализован адаптивный дизайн под мобильные устройства.',
      link: 'https://kyoto430.github.io/Vintage-cars/',
      gitLink: 'https://github.com/kyoto430/Vintage-cars',
    },
    {
      id: '21',
      image:
        'https://lh3.googleusercontent.com/9sbNgjtORwwGnj6bJy5L9q9TGXMmT6JtXVmwOXy4CQi6Cf0UqV9-IfYnXoATiRcA9XexoJIdGQcz8BCDAXsA1_07LDGAXeyrWgFZGOtZGH-JXqUvof_3QYIp1DtT6qiLHhuun-5oRiDHGyuBfhv5h4IeKGpJlEUyM5mKSZstjcyICnjdO7aIzTQMZo5O5PgNXgF1BHivT77QQhr7JuU8t5GfdTdnsl3ZyEhVOAEFdYIzS-CTl4E9sP2FVp3GUWoGu-PK3FjJIIaqXYRH9xHfQJm0zo-ockry3JpeRj0pY_7lTS2PWSmDLun_-8y80Sp3a5V_BHEQo2RFdQnfly6QeT04XLr-QnJ_51JzGC9W_NpZJ6y05uuBBYrhfP5Qhz22G6Ac-Izl39vSkulHHpBVEMHP0SwYi5AmfcDdR30n7ckRe1YmY1e2DnGPvE1eRnJbOV7r7pBkT_cDg7WyjBOeuYJW4BpdmluTngiQlCTGz-Ce0xQGrPlwosYkZIYmWzutEk3W9dsIviuhwpbT_ztEMM25AP83k8AMRdZmXZXj10GnIunuPjLbwDdVY6s6rCDcned3fWRIEylu1yFQsL4_9TBtUKIYH6Y0lDol_jpI3gdvLlnc1wi0K-PKfI-8lP7HznkRlykcSX1YG1J8zlNZzygz0Iwml9ultQF0LnPSlXjUP3mlpok_HhqAvEwBatD4jSTAIEo5Trwn19Q8QAyw0rRNUxRDDsWWx4Lj8jptpwHva8aGm5o4-Z3xQrjZUJa22yWyY_JN868C1vskBMbDOLiudv60NcCwqRH9jTjxWiNAElHwOg6phEIUsg4ZQVXbP-r1a-t9mCcbf_A4zFkYL3ZwCdyR7Ruh1C22KzrOK8K_bDmmqnZMYQhbiCpkWB9phaSGuz72rJiZCJatw6zEZfGDP3RwHQAeF2WnPX_sOo2Qhtrp_gQACK53OcAtVxd3VJtJWd6xc4H10Gz7DsVM3g=w1123-h778-no?authuser=0',
      title: 'Сайт World of Warcraft',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        'https://prepros.io/assets/legacy/icon.png',
      ],
      description:
        'Landing-page по вселенной World of Warcraft, с использованием плагина SlickSlider. Дизайн разработан самостоятельно в Figma. Реализован следующий интерфейс: слайдер, меню-бургер, всплывающие окна, аккордеон. Реализован адаптивный дизайн под мобильные устройства.',
      link: 'https://kyoto430.github.io/Project-1/',
      gitLink: 'https://github.com/kyoto430/Project-1',
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
      className="md:h-screen relative flex md:overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="md:absolute md:top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Проекты
      </h3>
      <h3 className="mb-8 md:absolute top-8 md:top-16 uppercase tracking-[3px] text-gray-500 text-sm">
        Прокрутите/свайпните страницу вправо, чтобы посмотреть больше проектов
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((element) => (
          <Project
            key={element.id}
            project={element}
            length={projects.length}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
