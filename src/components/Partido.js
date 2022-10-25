import Grid from '@mui/material/Grid';
import { useField } from 'formik';
import { useEffect, useState } from 'react';

const Partido = ({ data, resultsGrupo, setResultsGrupo, index }) => {
    
    const cargarImagen = require.context(`../assets/banderas`, true);
    const [ equipoA, setEquipoA] = useState('')
    const [ equipoB, setEquipoB] = useState('')
    
    const handleChangeMarcador= ( valor, equipo ) => {
        equipo === 'A' ? setEquipoA(valor) : setEquipoB(valor)
    }

    useEffect(() => {

        let ganador = ''
        let perdedor = ''
        let empate = false

        if(equipoA > equipoB){
            ganador = data.a.pais 
            perdedor = data.b.pais
            empate = false
        }
        if(equipoB > equipoA){
            ganador = data.b.pais 
            perdedor = data.a.pais
            empate = false
        }
        if(equipoB == equipoA){
            ganador = ''
            perdedor = ''
            empate = true
        }

        let resultado = {
            ganador: ganador,
            perdedor: perdedor,
            equipo_a: data.a.pais,
            marcador_a: equipoA,
            equipo_b: data.b.pais,
            marcador_b: equipoB,
            empate: empate
        } 

        resultsGrupo[index] = resultado
        setResultsGrupo(resultsGrupo)
    },[equipoA , equipoB] )

   

    return (
        
            <Grid container spacing={2} className="container-partido">
                <Grid item xs={2}>
                    <p className="pais-partido"> {data.a.pais} </p>
                </Grid>
                <Grid item xs={2}>
                    <div className="banderas-paises">
                        <img src={cargarImagen(`./${data.a.bandera}`)} alt="bandera" />
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="container-inputs-partido">
                        <input type="number" minLength="1" maxLength="1" onChange={(e) => handleChangeMarcador(e.target.value, 'A')}  />
                        <p> | </p>
                        <input type="number" minLength="1" maxLength="1" onChange={(e) => handleChangeMarcador(e.target.value, 'B')}/>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="banderas-paises">
                        <img src={cargarImagen(`./${data.b.bandera}`)} alt="bandera" />
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p className="pais-partido"> {data.b.pais} </p>
                </Grid>
            </Grid>
            
        
    )
}

export default Partido