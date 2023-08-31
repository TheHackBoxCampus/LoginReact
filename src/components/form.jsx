import React, {useEffect, useRef, useState} from 'react';
import "../assets/form.css"

export default function Form() {
    return (
        <div className='container_form'>
            <form className='form'>
                <h1>Login</h1>
                <input type="text" placeholder='user'/>
                <input type="password" placeholder='password'/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}