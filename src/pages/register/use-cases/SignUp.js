import { URL_SERVER_BACK } from "../../../constants"
import axios from 'axios'
import { PopUp, ToastPopUp } from "../../../utils";

export const SignUp = async (fields, navigate) => {
    try {
        const url = `${URL_SERVER_BACK}/signup.php`
        const response = await axios.post(url,
            {
                name: fields.name,
                user: fields.user,
                password: fields.password
            },
            ).then(respuesta => {

                if(respuesta.status === 200 && respuesta.data === 'Success'){
                    ToastPopUp('Su cuenta ha sido creada con exito','success')
                    /* localStorage.setItem('user', JSON.stringify({
                        user: fields.user,
                        name: fields.name,
                        quiniela: 'NO',
                        date: new Date()
                    })) */
                    navigate('/login')
                }

                if(respuesta.status === 200 && respuesta.data === 'Repeat'){
                    ToastPopUp('Usuario ya se encuentra registrado','warning')
                }

            });


    } catch (error) {
        console.log("Error: ", error)
    }
}