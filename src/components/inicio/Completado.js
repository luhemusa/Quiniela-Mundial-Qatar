import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Completado = () => {
    const navigate = useNavigate()

    return(
        <div style={{ 
            textAlign: 'center',
            color: 'white',
            marginTop: '30px'
            }}>
            <CheckCircleOutlineIcon sx={{fontSize: '100px', color: 'green'}}/>
            <h1> Su Quiniela ya ha sido registrada con exito</h1>
            <h3> puede ver su quiniela en el siguiente link</h3>
            <Button onClick={() => navigate('/mi-quiniela')} sx={{width: '300px', borderRadius: '20px', boxShadow: '5px 5px 5px rgba(0,0,0,0.2)', zIndex: '1'}} variant='contained' color='success' >
                 Mi Quiniela 
            </Button>
        </div>
    )
}

export default Completado