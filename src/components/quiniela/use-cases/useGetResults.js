import { useState } from 'react';
import axios from 'axios';
import { URL_SERVER_BACK } from '../../../constants';


export const useGetResults = () => {
    
    const [dataResults, setDataResults] = useState([])
    const getResults = async (user) => {
        try {
            const Url = `${URL_SERVER_BACK}/getResults.php`
            const result = await axios.post(Url,{user: user})
            setDataResults(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    return [dataResults , getResults]
}