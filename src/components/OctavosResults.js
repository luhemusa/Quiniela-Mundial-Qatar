import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { equipos } from "../data";
import Title from "./Title";

const OctavosResults = ({ results }) => {
    const cargarImagen = require.context(`../assets/banderas`, true);

    return (
        <div style={{ marginTop: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <Title label={results.partido} number={results.numero} />
            </div>
            <div className="octavos-partido" style={{ alignItems: 'center' }}>
                {
                    equipos.filter(team => team.pais === results.equipo_a).map((team1, i) => {
                        return (
                            <div style={{display: 'flex',alignItems: 'center' }}>
                                <img src={cargarImagen(`./${team1.bandera}`)} alt="bandera" style={{ borderRadius: '50%', margin: '0px 5px', objectFit: 'cover' }} width='30px' height='30px' />
                                <span>{team1.pais}</span>
                            </div>
                        )
                    })
                }
                <div className="container-inputs-partido" style={{ justifyContent: 'space-around' }}>
                    <p style={{margin: '0px 10px'}}><b>{results.marcador_a}</b></p>
                    <p> | </p>
                    <p style={{margin: '0px 10px'}}><b>{results.marcador_b}</b></p>
                </div>
                {
                    equipos.filter(team => team.pais === results.equipo_b).map((team2, i) => {
                        return (
                            <div style={{display: 'flex',alignItems: 'center'}}>
                                <span>{team2.pais}</span>
                                <img src={cargarImagen(`./${team2.bandera}`)} alt="bandera" style={{ borderRadius: '50%', margin: '0px 5px', objectFit: 'cover' }} width='30px' height='30px' />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default OctavosResults