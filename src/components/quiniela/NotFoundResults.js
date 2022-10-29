
import FindReplaceIcon from '@mui/icons-material/FindReplace';

const NotFoundResults = () => {

    return(
        <div style={{ 
            textAlign: 'center',
            color: 'white',
            marginTop: '30px'
            }}>
            <FindReplaceIcon sx={{fontSize: '100px', color: 'green'}}/>
            <h1> No se consiguen resultados guardados </h1>
            <h3> Ingrese a la pagina de inicio para registrar sus resultados</h3>
            
        </div>
    )
}

export default NotFoundResults