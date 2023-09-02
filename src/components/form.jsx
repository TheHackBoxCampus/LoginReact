import React, {useRef, useState} from 'react';
import "../assets/form.css"
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { validateLoginFrontend } from '../schemas/login.[DTO_FRONTEND].js';

export default function Form() {
    const [LoggedIn, setLoggedIn] = useState(false); 
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
// TODO: Resolver y ajustar la logica a las necesidades.
    const send = async () => {
        const formik = useFormik({
            initialValues: {
                email: '',
                passport: ''
            },
            validationSchema: validateLoginFrontend,
            onSubmit: async (params) => {
                let request = await (await fetch("http://localhost:5000/login", {
                    method: "GET",
                    body: user,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json(); 
        
                if(request.state >= 400) {
                    Swal.fire({
                        title: "Ops!, ha ocurrido un error",
                        text: request.message,
                        icon: "error"
                    })
                }else {
                    setLoggedIn(true)
        
                }    
            }
        })
    }

    return (
        <div className='container_form'>
            <form className='form'>
                <h1>Login</h1>
                <input name='email' type="text" placeholder='email'/>
                  <input name='password' type="password" placeholder='password'/>
                <button onClick={send}>Enviar</button>
            </form>
        </div>
    )
}