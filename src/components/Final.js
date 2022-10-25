import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"
import { equipos } from "../data";
import Title from "./Title";

const Final = ({ set, name, grupo1, grupo2, label, number }) => {

    const cargarImagen = require.context(`../assets/banderas`, true);
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')

    const handleChange = (equipo, valor) => {

        if (equipo === 'A') setEquipo1(valor)
        if (equipo === 'B') setEquipo2(valor)

    }

    useEffect(() => {
        set(name, { equipo_a: equipo1, equipo_b: equipo2 })
    }, [equipo1, equipo2])


    return (
        <div style={{ marginTop: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <Title label={label} number={number} />
            </div>
            <div className="octavos-partido">
                <FormControl fullWidth sx={{ margin: '0px 10px', color: 'white', fontSize: '12px' }}>
                    <InputLabel id="demo-simple-select-label">1ro Grupo A</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={equipo1}
                        label="1ro Grupo A"
                        onChange={(e) => handleChange('A', e.target.value)}
                    >
                        {
                            equipos.filter(team => team.pais === grupo1.equipo_a || team.pais === grupo1.equipo_b).map((team1, i) => {
                                return (
                                    <MenuItem value={team1.pais} key={i}>
                                        <img src={cargarImagen(`./${team1.bandera}`)} alt="bandera" style={{ borderRadius: '50%', marginRight: '5px', objectFit: 'cover' }} width='30px' height='30px' />
                                        <span>{team1.pais}</span>
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                <h3> vs </h3>
                <FormControl fullWidth sx={{ margin: '0px 10px' }}>
                    <InputLabel id="demo-simple-select-label">2do Grupo B</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={equipo2}
                        label="2do Grupo B"
                        onChange={(e) => handleChange('B', e.target.value)}
                    >
                        {
                            equipos.filter(team => team.pais === grupo2.equipo_a || team.pais === grupo2.equipo_b).map((team2, i) => {
                                return (
                                    <MenuItem value={team2.pais} key={i}>
                                        <img src={cargarImagen(`./${team2.bandera}`)} alt="bandera" style={{ borderRadius: '50%', marginRight: '5px', objectFit: 'cover' }} width='30px' height='30px' />
                                        <span>{team2.pais}</span>
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Final