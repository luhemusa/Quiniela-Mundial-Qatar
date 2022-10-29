import { useState } from 'react';
import axios from 'axios';
import { URL_SERVER_BACK } from '../../../constants'

export const useGetPuntos = () => {
    
    const [puntos, setPuntos] = useState([])
    const getPuntos = async (user) => {
        try {
            const Url = `${URL_SERVER_BACK}/getPuntos.php`
            const result = await axios.post(Url,{user: user})
            console.log("result: ", result.data)
            setPuntos(result.data.puntos)
        } catch (error) {
            console.log(error)
        }
    }
    return [puntos , getPuntos]
}