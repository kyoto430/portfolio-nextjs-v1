import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nateriver345@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }
  return (
    <div className="md:h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center">
      <h3 className="md:absolute text-center md:top-16 uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl">
        Связаться со мной
      </h3>
      <div className="flex flex-col space-y-5 md:space-y-10">
        <h4 className="pt-5 md:pt-7 text-xl md:text-4xl font-semibold text-center">
          Если Вас что-то заинтересовало.
          <span className="decoration-[#F7AB0A]/50 underline">
            Свяжитесь со мной.
          </span>
        </h4>
        <div className="space-y-2 md:space-y-1">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+375336613974</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">nateriver345@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Минск, Беларусь</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:space-y-2 pt-2 md:pt-0 w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              {...register('name')}
              placeholder="Имя"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Тема"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Сообщение"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] mt-5 py-3 px-5 md:py-5 md:px-10 rounded-md text-black font-bold text-lg"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}
