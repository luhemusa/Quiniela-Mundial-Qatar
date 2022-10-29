import axios from "axios";
import { URL_SERVER_BACK } from "../../../constants";
import { ToastPopUp } from "../../../utils";

export const SetResults = async( fields, navigate ) => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const url = `${URL_SERVER_BACK}/registrar_resultados.php`
        const response = await axios.post(url,
            {
                ...fields
            },
            ).then(respuesta => {
                console.log("Respuesta: ", respuesta.data)
                if(respuesta.status === 200 && respuesta.data === 'Success'){
                    
                    localStorage.setItem('user', JSON.stringify({
                        id: user.id,
                        user: user.email,
                        name: user.nombre,
                        quiniela: 'SI',
                        date: user.date
                    }))
                    
                    ToastPopUp(`Datos registrados con exito`,'success')
                    navigate('/mi-quiniela')
                }else{
                    ToastPopUp('Ha ocurrido un error.', 'error')
                }
            });

    } catch (error) {
        console.log("Error: ", error)
    }
}