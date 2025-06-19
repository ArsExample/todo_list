import { useState, useEffect } from 'react'
import axios from "axios"

export default function WReg() {

    return (
        <>
            <section>
                <strong>Регистрация</strong>
            </section>
            <section>
                <input placeholder='UserName'/>
            </section>
            <section>
                <input placeholder='Email'/>
            </section>
            <section>
                <input placeholder='Password'/>
            </section>
        </>
  )
}
