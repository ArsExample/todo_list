import { useState, useEffect, React } from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios"
import RegButton from './RegButton'
import "../index.css"

export default function WReg() {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        // <form id="reg">
        //     <section>
        //         <strong>Регистрация</strong>
        //     </section>
        //     <section>
        //         <input placeholder='UserName'/> 
        //     </section>
        //     <section>
        //         <input placeholder='Email'/>
        //     </section>
        //     <section>
        //         <input placeholder='Password'/>
        //     </section>
        //     <button type="submit">
        //         Регистрация
        //     </button>
        // </form>
        <form type="reg" onSubmit={handleSubmit(onSubmit)}>
            <input type='' placeholder='UserName' {...register('username')}/>
            <input type='' placeholder='E-mail' {...register('email')}/>
            <input type='' placeholder='Password' {...register('password')}/>
            <button type='sumbit'>Register</button>
        </form>
  )
}
