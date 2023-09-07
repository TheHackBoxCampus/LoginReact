import * as Yup from "yup"; 

const validateLoginFrontend = Yup.object().shape({
    email: Yup.string().email("Correo electronico incorrecto!").required("Parametro email es obligatorio"),
    password: Yup.string().min(6, "La contraseña debe tener minimo 6 caracteres").matches("^[A-Za-z0-9]+$", "contraseña invalida!").required("Parametro password es obligatorio!")
})

export {
    validateLoginFrontend
}