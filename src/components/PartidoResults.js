import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

const PartidoResults = ({ key,  data, results, color }) => {
    
    const cargarImagen = require.context(`../assets/banderas`, true);

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
                    <div className="container-inputs-partido" style={{justifyContent: 'space-evenly', border: `3px solid ${color}`}}>
                        <p><b>{results.marcador_a}</b></p>
                        <p> | </p>
                        <p><b>{results.marcador_b}</b></p>
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

export default PartidoResults