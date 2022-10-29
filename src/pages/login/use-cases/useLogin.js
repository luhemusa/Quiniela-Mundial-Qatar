import axios from "axios";
import { URL_SERVER_BACK } from "../../../constants";
import { ToastPopUp } from "../../../utils";

export const LoginUser = async( fields, navigate ) => {
    try {
        const url = `${URL_SERVER_BACK}/login.php`
        const response = await axios.post(url,
            {
                user: fields.user,
                password: fields.password
            },
            ).then(respuesta => {

                if(respuesta.status === 200 && respuesta.data.length > 0){
                    ToastPopUp(`Bienvenido ${respuesta.data[0].nombre}`,'success')
                    localStorage.setItem('user', JSON.stringify({
                        id: respuesta.data[0].id,
                        user: respuesta.data[0].email,
                        name: respuesta.data[0].nombre,
                        quiniela: respuesta.data[0].quiniela,
                        date: respuesta.data[0].date
                    }))
                    navigate('/inicio')
                }else{
                    ToastPopUp('Usuario o Contraseña incorrecto', 'error')
                }
            });

    } catch (error) {
        console.log("Error: ", error)
    }
}