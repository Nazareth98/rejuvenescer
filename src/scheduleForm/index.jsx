import React from 'react'
import Input from '../components/input/index'
import Button from '../components/button/index'

const ScheduleForm = () => {
  return (
    <div className='w-full h-20 bg-[#e3caa9] sticky bottom-0 mt-3'>
        <div className='xl:w-4/6 w-full h-full m-auto flex flex-row items-center justify-around py-4'>
            <div className='lg:w-1/4 p-2'>
                <p className='lg:text-lg text-[#AB8966]'>Agende sua <span className='font-bold'>avaliação gratuita!</span></p>
            </div>
            <div className='w-2/4 flex-row hidden lg:inline-flex '>
                <Input type="text" placeholder="Seu nome"/>
                <Input type="email" placeholder="Seu Email"/>
                <Input type="tel" placeholder="Seu Telefone"/>
            </div>
            <div className='lg:w-1/6 text-center p-2'>
                <Button link="https://api.whatsapp.com/send?phone=5545984070668&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!" name= "Agendar"/>
            </div>
        </div>
    </div>
  )
}

export default ScheduleForm