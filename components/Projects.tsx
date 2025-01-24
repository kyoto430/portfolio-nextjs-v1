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
      title: 'Golfstrim',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
      'This project is a website developed for Golfstrim-Kazan, a company offering a range of services in the field of travel and tourism. The website features a clean, professional design with easy navigation to present the company’s offerings, including tour packages, travel services, and customer testimonials. Fully responsive, it provides a seamless experience across devices, ensuring visitors can easily explore and book services. The website aims to enhance the user experience while reflecting the company’s commitment to quality service and customer satisfaction.',
      link: 'https://golfstrim-kazan.ru/',
      gitLink: 'https://github.com/kyoto430/golfstrim',
    },
    {
      id: '2',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczOs6ma0yfgEg3x1CHVurdIXllWzafHOHeZjlcvcL2YOXHNMQUNIYHBZibUr69LWL2Cg7icqOiuf1lhZDg5xHeEJcwzD8-97EJpzVPlMwKEQF7r9a0Y2YjvZ_HaKWylLLAF6wFugqPQavzBuqzG37seG=w1123-h778-s-no-gm?authuser=0',
      title: 'Driving School City of Roads',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
      'This project is a user-friendly website designed for an auto school, aimed at providing essential information about courses, schedules, and registration. The website features a clean and modern design, with intuitive navigation and a responsive layout to ensure a seamless experience across all devices. The site highlights the school’s offerings, including driving lessons, certifications, and additional services, creating a professional online presence that makes it easy for potential students to learn about the programs and sign up.',
      link: 'https://kyoto430.github.io/avto-school/',
      gitLink: 'https://github.com/kyoto430/avto-school',
    },
    {
      id: '3',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczMEJd6nXqS1VrF-ndeM4BKdTYL-BBYEgh2I720zC_rw37-YJFFeTiKE05GDrK2aY9Syz_sOLZw5egXZIhwy_-6Ve4SXnfHIdf87BtAZIwdXZmyKEDAUb-n2OFKVUs83lI4LexAYlr1qOaLGIDzouuCx=w1123-h778-s-no-gm?authuser=0',
      title: 'OKONTIBRAVO',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
      'This project is a promotional website designed for OkontiBravo, offering a modern and visually appealing presentation of the company’s services. The website focuses on providing clear and easy-to-navigate content while showcasing the brand’s values and offerings. With a fully responsive design, it ensures a seamless browsing experience across various devices, combining both functionality and aesthetic appeal to engage users effectively. The overall layout reflects the company’s professional approach and commitment to delivering high-quality services.',
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
      'This project is a modern website designed to represent the CT brand, showcasing its services and solutions. The website features a clean, minimalist design with a focus on ease of navigation and user engagement. It is fully responsive, ensuring an optimal viewing experience on all devices, and presents the company’s offerings in a straightforward and visually appealing manner. The site aims to create a professional online presence that reflects the brand’s commitment to quality and innovation.',
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
      'This project is a corporate website designed for Cargoff, a logistics and transportation company. The website features a clean, professional design that highlights the company’s services, expertise, and commitment to efficiency in the logistics industry. With a responsive layout, the website ensures a seamless user experience across all devices, offering easy access to service details, contact information, and company values. The design emphasizes functionality and trust, aligning with the company’s mission to provide reliable and effective logistics solutions.',
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
      'This project is a portfolio-style website created to showcase architectural designs and projects. The site features a clean, contemporary layout with a focus on high-quality imagery and detailed project descriptions. Designed to be fully responsive, it ensures a smooth and engaging user experience across various devices. The website highlights the company’s architectural expertise, presenting their work in a visually appealing way that reflects professionalism and creativity in the field of architecture.',
      link: 'https://kyoto430.github.io/architecture/',
      gitLink: 'https://github.com/kyoto430/architecture',
    },
    {
      id: '7',
      image:
        'https://lh3.googleusercontent.com/pw/ABLVV874rJvAaDYu45oB2gxplqHs8xF6JZhqMkN_V-hi6iYWALE-cg8UJ9-8SS7WQFwa35nbftwItQtCp1RezR3X3avFpp4yNuFp9YGUq_VDL1ysw7HguDLc37Sa9qGmF_PF-vFTFZAPULVSu-peZ8-1zdVX=w957-h663-s-no?authuser=0',
      title: 'Caucasian Pilgrim',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
        'This project is a tourism website designed to promote tours to the Caucasus region. The website showcases detailed information about various tours, destinations, and experiences, with an emphasis on visual appeal and user engagement. Featuring a modern, responsive design, it ensures a seamless browsing experience across all devices. The site highlights the beauty and diversity of the Caucasus, providing visitors with the necessary information to plan their travels with ease and excitement.',
      link: 'https://kyoto430.github.io/kavkaz-tour/',
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
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
        'This project is a sleek and modern website, designed to showcase their innovative solutions and services. The website features a minimalist layout with a focus on clean design and easy navigation. Its responsive design ensures optimal performance across devices, providing users with a smooth and engaging experience. The overall aesthetic is professional, aligning with the company’s technological expertise and forward-thinking approach.',
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
        'This project is a website developed to promote a VPN service, highlighting its features, benefits, and security capabilities. The site is designed with a sleek and modern layout, focusing on clarity and ease of navigation. It provides users with essential information about VPN services, ensuring a seamless browsing experience across various devices. The responsive design, along with a professional aesthetic, emphasizes security, privacy, and reliability.',
      link: 'https://kyoto430.github.io/vpn/',
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
        'https://cdn-icons-png.flaticon.com/512/174/174881.png',
      ],
      description:
        'This project is a professional website created for a financial services company, designed to present their offerings and expertise in the financial industry. The website features a clean, modern design with a focus on user-friendly navigation and clear presentation of services. Its responsive design ensures smooth accessibility across different devices, while maintaining a sophisticated look that reflects the company’s focus on financial solutions and innovation.',
      link: 'https://kyoto430.github.io/finspace',
      gitLink: 'https://github.com/kyoto430/finspace',
    },
    {
      id: '11',
      image:
        'https://lh3.googleusercontent.com/pw/ABLVV86-12SLSkVy-syGO_FhbGuxe96_wjmd0xWwIPADVKopFjI6g9hvCWe781J-CPJZkovfdLcJz2M-hlffGaZybNabN4yiITB6gm2oDkqAGGRg3bTfN2VL1MNYraPHj3B1NXdnPaTuDqqw81JN0ZTVGmYa=w957-h663-s-no?authuser=0',
      title: 'Kryashen Spiritual Mission',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'This project is a cultural website dedicated to the traditions and heritage of the Kryashensky community. The design emphasizes vibrant visuals, engaging content, and intuitive navigation to highlight the richness of the culture. The website is fully responsive, ensuring accessibility and a seamless experience on various devices, while maintaining a modern aesthetic that complements the historical and cultural theme.',
      link: 'https://kyoto430.github.io/kryashenskaya/',
      gitLink: 'https://github.com/kyoto430/kryashenskaya',
    },
    {
      id: '12',
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczPh_i83ePuA1_7L8wwwvMZA961ywZTtxYprI3QfZTOD6tvEbPOEgR78OaGWJDpt1k5ivOxAm58t-OOeOxmlIlkUa882maytJwJmqOmeVzE9dZiSvHCWaU2SH1bVSmGvFShryXKNm7yc-96EiDXOeskS=w1123-h778-s-no-gm?authuser=0',
      title: 'Osterfish',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'This project is a promotional website for a seafood company, designed to showcase their products and services. The website features a clean and modern layout, focusing on high-quality visuals and intuitive navigation. With a responsive design, it ensures an optimal user experience across all devices, highlighting the company’s dedication to quality and professionalism in the seafood industry.',
      link: 'https://kyoto430.github.io/osterfish',
      gitLink: 'https://github.com/kyoto430/osterfish',
    },
    {
      id: '13',
      image:
        'https://lh3.googleusercontent.com/pw/AJFCJaXkF_Lt1E4EIHnzQ200XhTRVq9FlMQoyiEnku_r1gfm9baPB7Bi4SQlSmIhj2hb904xz6H8ZUu-d6MS22CfuXyhwPoFtCv1X50JammuFBbms5uVGx9bSdZcbR1QT9pDXJoZMm5ubQMuvjk3zYgxE8XD=w1123-h778-s-no?authuser=0',
      title: 'Astrology',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      ],
      description:
        'This project is a visually engaging website dedicated to astrology enthusiasts. The site is designed to provide users with information about astrological topics in an appealing and intuitive way. With a responsive design and user-friendly interface, the website ensures a seamless browsing experience across all devices while showcasing a modern and mystical aesthetic that aligns with the theme of astrology.',
      link: 'https://kyoto430.github.io/astrology/',
      gitLink: 'https://github.com/kyoto430/astrology',
    },
    {
      id: '14',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8taBF_dv4rqktCLr4uxSDSPRFGsHt43ajPVl_e81frqNtGiSqoFEARet_iGrnjvOGPgY4-JIFXTp4A82gQMKhl-hdGlfwWVhev_cyTwMp6Dd3NSwzT3HgZ2R8mfhCHJVtDkfNJwzKkPR9-Xh6TylNO=w957-h663-s-no?authuser=0',
      title: 'Baltservice',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      ],
      description:
        'This project is a corporate website developed for a service-oriented company to present their business offerings and build an online presence. The website features a clean and professional design, intuitive navigation, and responsive functionality, ensuring seamless access across different devices. Its focus is on effectively communicating the company’s expertise and providing easy access to contact information for potential clients.',
      link: 'https://kyoto430.github.io/baltserivce/',
      gitLink: 'https://github.com/kyoto430/baltserivce',
    },
    {
      id: '15',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc84HzeNyvPwHyhyUfEbvu7qlszd4mG72Za1KLC1oQePW_pHkPtZJFRmqo_qXD_6sue9qgTio2vDfvzAlRBjbGsoDK4xWwLIDab2h472PKqCKPgQk-1JbOf39hlLcnMeo-yLrBYbXeZUtRhlIlcUy9fN=w957-h663-s-no?authuser=0',
      title: 'Syberia',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      ],
      description: 'This project is a promotional website. The site features a visually appealing layout, captivating imagery, and smooth navigation to provide an immersive experience for visitors. Developed with a responsive design, it ensures optimal performance and accessibility across various devices, showcasing both modern aesthetics and functionality.',
      link: 'https://kyoto430.github.io/syberia/',
      gitLink: 'https://github.com/kyoto430/syberia',
    },
    {
      id: '16',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc_d494cGgckTq7h1GJsavYZ6Jww0B7JyMVpKYvtSlTPcaBoVbY24ogp1IxEKBXxyJXJJQk3S7YWKyusto_qBXp153svfuzlbfq8jm8RIAHz6yF5CRQ8dHBnpnryQ0PgNuihV9H2eGQIF_bufQyvl0rg=w957-h663-s-no?authuser=0',
      title: 'Security System',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      ],
      description: 'This project is a responsive website for a security services company, developed to showcase their offerings and establish an online presence. The website provides detailed information about the company’s services and expertise.',
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
        'Shelter website, a training project at the Rolling Scopes School course. The following interface has been implemented: slider, burger menu, modal windows, pagination. Adaptive design for mobile devices has been implemented.',
      link: 'https://rolling-scopes-school.github.io/kyoto430-JSFE2023Q1/shelter/index.html',
      gitLink: 'https://github.com/rolling-scopes-school/kyoto430-JSFE2023Q1',
    },
    {
      id: '18',
      image:
        'https://lh3.googleusercontent.com/wg799ot1vM3lrsI4W5fjDRnh56N5v_gmvTgEX5NQJrUq2Ny_b7I6OyXoZZhI8xNV7-Z625KnCDj3iQBB5ZtSTxRZN6wNn4Nn1JqPt2RKMFtAScNlAR4dIkdex7lVo-WHxH88aX0eigGDBQqQVKqund644kefehK8HVCQKbtI9t1fWXt5dr__QbihM5tLGtA5DfxCqkYfQf-DCeFWXJ7rdmy5RXdyQwn94Ms3Gjdtmn9f03fhydIolgJNF7Bs4Nh5OH9XofDWe1vWLN_rsAnQ3jweSzSyptBECN7w7FP8d_wRnzujCKGt7FFtD4ttOi9Q4XUg5W_BkPF_1PcUxobhANSaWu5UObUE0rAL0_aV_aXSlNYKjKcgkjyniXprpwoxbpHQbyaPbMOMFh8BDX0yrVKak9lZp5B_sOI5zqsKgcRSoJe9_CYjvnRecrpznhZMJTmp98LLT9qnx3YLb14toScys558ewtEMh2PGPcOX2_ejJu9MBVc-P6m43Kp7Oahb_2vpad7wArmVWbEKX03dfkthaUlc1J5rRSb80yJoNGPIyQCqIp_Da6LA9pqOiakUjjQXKwWFHnZaXaxrSUdYpk2bqnpYJn8awJEz67iTARvwh8ouVe0QhpE8iZ3LBpDDYdlX2aRyaRg9aaHReaTg_6MwlSxXHJxKdUV6N1ib0OGwDZokzBDOghQwQSJejOsSjKtnNjNATOzTAvGW6MLfccb5i3wk0bJNQ1KCP-HOpqIo_4wt54WRPx-399yJbJCauhzIMIy5Q6RS5WLSksiygYmEmMHfARy28DZKEL4X0iqchsiCGmnbvOH2KPHoP2Lchc61oZ2ObMe0AsdMePZcmvWaGEkFXYF0vmkMwwBXt5SA9BExTqYxtgIrH-B8zmQphct73gVjmepH_XFjEhmiV9LIixzLqN7g0ZMT131i-bb1H6jpiGW5LULzRpRgXemP0M2DINYkxLL7dy0Fx4TrA=w1123-h778-no?authuser=0',
      title: 'Team Website',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      ],
      description:
        'A React website presenting a team of participants. The following functionality has been implemented: personal participant cards, adding and removing from favorites, and a comments page. Adaptive design for mobile devices has been implemented.',
      link: 'https://orlovaleksandr89.github.io/hakaton',
      gitLink: 'https://github.com/orlovaleksandr89/hakaton',
    },
    {
      id: '19',
      image:
        'https://lh3.googleusercontent.com/w36qoEtSQ_0vPl-Jfw3hRRge7VBTIKiknM1ti_aU3p4j7gosOyaWXdM4Af0MGxcPvp_0Z-T_a8I6QTIanoEEnbmgU4Y2a7Kdb9AOasnVxN1PjHdwzb6DiAuTqU-7tgMvm6YrE140537uQvYzYrV_Tn7KziD4YXRm8fAOQzrm2w4febQFezM1y7exfCCJTOXAScI58Iar6Yo6GGrM_wJ_YFHQ6GaTC_ce5TZ5hA92lXbh8iEhx_lvTk8brfNhxI0VbPmKNXdelqwviGvZW9j3dUuUDbomcGWvai9xp4nx3UGObBlc8HRUFHa5NKWEyGsgf7MJg-l3Bwt96AIOoDSw6GrDBkW3u8OrjtYQBhXyRJqOJpgJ8H_-mP2iZc2af0rad2cEbmP5Th_muFI1dj003GSn9zEfdNdvGYih_B7AcHlOpVIiE0dnAZdK89dbyc2LnN7v3EBey9lntQapBY7SJCJdG0EoHuZYQj2WRjvpGvYXfzr7e4qQeTj5LSe0ggJ89R4JSPzObZsQ3BkzQciusYsqOrtErm5V71JeN5SeFTnvFd2Crh39FOgeRDETt6FVySy5pEXvhMN7cYHJcNqf2NKmwjNpnUUH0_ze7SNzGNGWxSt0HILU2tSdcVQEC12uTfcHMRo35Y13obdcthDiVkF_tsmvnnpqPalygNZSIpbeyjMQTamqGMq0uHs--y2mbaGjviL6lvuBa2MbwuIrYRTFHr8r6gef_jhnf9bF2CO3LO6V6gHnZMASNbsfrbUSwFnmt0auSskBbx6Y35kAPyQbZ5L0tv_-hivaVEyBwMBJtwpzye894piL0PWLsivs13LhpajWYTRXRFDoCs1VFOw-R58HW7PvemGyoSAh8phQ4ccO4d8l9wEWc3wFChswSfhwyWQP0Vw1IXUxztFy63BdPnCyfsbeazjsq8PU7jg3oSYz3RGJBpjEN4dQG4mdYaZeUaJ6fNXIYM5ZJ7nKCw=w1123-h777-no?authuser=0',
      title: 'Web Application for Event Management',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
        'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
        'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png',
      ],
      description:
        'The web application for organizing events has the following functionality: user registration and authorization in the application, users personal page with the ability to edit data, page with ongoing events, page with registered participants, personal pages of participants with comments, page for adding a new event, shopping cart. The following functions are also implemented: sorting, searching, filtering, pagination, field validation.',
      link: 'https://kyoto430.github.io/final-fast-company/',
      gitLink: 'https://github.com/kyoto430/final-fast-company',
    },
    {
      id: '20',
      image:
        'https://lh3.googleusercontent.com/IAua3SHquDJcxd3_hRPyHjrqMcwS2FlAkTflHA7QQmk1EeKXVsil8soDk4bzc0NpWWkhhGHYZbS6b3dipgugiDQlw2o-BFuYh1BM53mQuCk_bzGht2X4zKLlnINlCFbbRpWWaaBYacu9B_M4idItlQ0RbgcxJuDvuLLeiGF3h48pM346WEKyURqbzneOuBeV-WeNu3il5ztg30RXGEewPsvhaS8a47rz2RtkB0y1lcf71EOSnVANCViNRwhwT8Jfc8NCFsjMUvu2YEBvuzipZfqS2rGTvby0g8qZPNwmSVLp3tFzKqOcDP5E2HdSnJNKTBV6oD1veEAb19zGcuQNspBp0u85jQ23gukGRNs4QQDc2IsRmgv1VwHlRgfUh4N1e0uXuf5L5hLls0CqUUqfe_9UmsiwTNnI3MV4zq2EySTAd43AbZ3Wu7MwAs4kCqgce7I6YK_m2n48dujmTTzJ0GQNFPEzpBzHiNXIaZfUMefF6WyK2KSTahuvPir4kX_Y51D4yt7MrQrTj1ONw8o9jx4yEUzKNxAtrXaClNncPtSn1SxK2mwBVl895zLctmZ3cCc2kOIkFS7In66sbIRM8YHlC0rzHLtJYByGBX9T-iLBBWwQXjaKdbnRLXOP0jRqh-9U0d_Nzj0yIGptgB0ix6S3EM-JT4cDvJb8LsfOKGTXXWFsF5tPuVVlSaLyoCMzeDV-JqAEWam4rjEoMMuGo2jQQwFmFQsOe3E0H7M7uLWNmtyMzIlC0xSPIY4UpS_VZhmgCak9xctnELboyGU5NkeiVwtIozR-CwARe78uu-OHkeyrylu0sgjYLXvkFdz51bPx9iJwu5ya69kanuKaTNvLb2x_oKyOwFuuzU6LITlRe3aU4nMSJTdjTDrRI8ixDpL--4bt9OAwPt8c-tK1GcRpRLlD7l4MSHTFNjrmpXOsNH1_GjsCRSbIqYfggLT1q5qBYBkSDKCM2ijXMx4WcA=w1123-h778-no?authuser=0',
      title: 'Vintage Cars',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      ],
      description:
        'The site was developed without using additional plugins. The design was developed independently in Figma, the images were taken from unsplash. The following interface was implemented: slider, tooltips, burger menu, pop-up animations. Adaptive design for mobile devices was implemented.',
      link: 'https://kyoto430.github.io/Vintage-cars/',
      gitLink: 'https://github.com/kyoto430/Vintage-cars',
    },
    {
      id: '21',
      image:
        'https://lh3.googleusercontent.com/9sbNgjtORwwGnj6bJy5L9q9TGXMmT6JtXVmwOXy4CQi6Cf0UqV9-IfYnXoATiRcA9XexoJIdGQcz8BCDAXsA1_07LDGAXeyrWgFZGOtZGH-JXqUvof_3QYIp1DtT6qiLHhuun-5oRiDHGyuBfhv5h4IeKGpJlEUyM5mKSZstjcyICnjdO7aIzTQMZo5O5PgNXgF1BHivT77QQhr7JuU8t5GfdTdnsl3ZyEhVOAEFdYIzS-CTl4E9sP2FVp3GUWoGu-PK3FjJIIaqXYRH9xHfQJm0zo-ockry3JpeRj0pY_7lTS2PWSmDLun_-8y80Sp3a5V_BHEQo2RFdQnfly6QeT04XLr-QnJ_51JzGC9W_NpZJ6y05uuBBYrhfP5Qhz22G6Ac-Izl39vSkulHHpBVEMHP0SwYi5AmfcDdR30n7ckRe1YmY1e2DnGPvE1eRnJbOV7r7pBkT_cDg7WyjBOeuYJW4BpdmluTngiQlCTGz-Ce0xQGrPlwosYkZIYmWzutEk3W9dsIviuhwpbT_ztEMM25AP83k8AMRdZmXZXj10GnIunuPjLbwDdVY6s6rCDcned3fWRIEylu1yFQsL4_9TBtUKIYH6Y0lDol_jpI3gdvLlnc1wi0K-PKfI-8lP7HznkRlykcSX1YG1J8zlNZzygz0Iwml9ultQF0LnPSlXjUP3mlpok_HhqAvEwBatD4jSTAIEo5Trwn19Q8QAyw0rRNUxRDDsWWx4Lj8jptpwHva8aGm5o4-Z3xQrjZUJa22yWyY_JN868C1vskBMbDOLiudv60NcCwqRH9jTjxWiNAElHwOg6phEIUsg4ZQVXbP-r1a-t9mCcbf_A4zFkYL3ZwCdyR7Ruh1C22KzrOK8K_bDmmqnZMYQhbiCpkWB9phaSGuz72rJiZCJatw6zEZfGDP3RwHQAeF2WnPX_sOo2Qhtrp_gQACK53OcAtVxd3VJtJWd6xc4H10Gz7DsVM3g=w1123-h778-no?authuser=0',
      title: 'World of Warcraft',
      technologies: [
        'https://cdn-icons-png.flaticon.com/512/174/174854.png',
        'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        'https://prepros.io/assets/legacy/icon.png',
      ],
      description:
        'Landing-page on the World of Warcraft universe, using the SlickSlider plugin. The design was developed independently in Figma. The following interface is implemented: slider, burger menu, pop-up windows, accordion. Adaptive design for mobile devices has been implemented.',
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
        Projects
      </h3>
      <h3 className="mb-8 md:absolute top-8 md:top-16 uppercase tracking-[3px] text-gray-500 text-sm">
        Scroll/swipe right to see more projects
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
