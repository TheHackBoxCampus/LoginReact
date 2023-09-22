import {useState} from 'react';
import "../assets/form.css"
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { validateLoginFrontend } from '../schemas/login.[DTO_FRONTEND].js';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    let navigate = useNavigate();
    const [LoggedIn, setLoggedIn] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validateLoginFrontend,
        onSubmit: async (values) => {
            try {
                let request = await (await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND}/login`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json();
    
                if(request.status >= 400) {
                     Swal.fire({
                        title: "Ops!, ha ocurrido un error",
                        icon: "error",
                        text: request.message
                    })
                    return setLoggedIn(false)
                }else {
                    let headers = request.headers; 
                    let token = headers["X-Authorization"];
                    localStorage.setItem("auth", JSON.stringify(token));    // ref in frontend
                    setLoggedIn(true)
                }
            }catch(err) {
                console.log(err)
                setLoggedIn(false)
            }
        }
    })
    // ? control errors 
    if(formik.isSubmitting && Object.values(formik.errors).length > 0) {
        for(let prop in formik.errors) {
            Swal.fire({
                title: "Ops!, ha ocurrido un error",
                icon: "error",
                text: `${formik.errors[prop]}`
            })
        }
    }

    if(LoggedIn) {
        return navigate("/success")
    }


    return (
        <div className='container_form'>
            <form className='form' onSubmit={formik.handleSubmit}>
                <h1>Login</h1>
                <input value={formik.values.email} onChange={formik.handleChange} name='email' type="text" placeholder='email'/>
                  <input value={formik.values.password} onChange={formik.handleChange} name='password' type="password" placeholder='password'/>
                <button type='submit' disabled={formik.isSubmitting}>Enviar</button>
            </form>
        </div>
    )
}