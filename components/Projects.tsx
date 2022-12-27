import React from 'react'
import { motion } from 'framer-motion'
import Project from './Project'

type Props = {}

export default function Projects({}: Props) {
  const projects = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
  ]
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 md:top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Проекты
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
  )
}
