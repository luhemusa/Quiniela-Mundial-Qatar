import { useField } from "formik"
import { useEffect, useState } from "react"
import { colors } from "../constants"
import { FormatDate } from "../utils"
import Partido from "./Partido"

const Grupo = ({ data, resultadosSeccion, setResultadosSeccion, index, ...props }) => {
    const [field, meta] = useField(props)
    const [ resultsGrupo, setResultsGrupo] = useState([{},{},{},{},{},{}])
    const Colors = colors[index]
    
    useEffect(() => {
        resultadosSeccion[index] = resultsGrupo
        setResultadosSeccion(resultadosSeccion)
    }, [resultsGrupo])


    return (
        <div>
            <div className="title-group"> <h5 style={{ backgroundColor: Colors}}>{data.nombre}</h5> </div>
            <div className="container-group">
                <div className="container-dates">
                    {
                        data.grupo.map((item, index) => {
                            return (
                                <div key={index} style={{ padding: '2px 0px' }}><label> {FormatDate(item.fecha)} </label><p> {item.hora} </p></div>
                            )
                        })
                    }
                </div>
                <div className="box-group">
                    {
                        data.grupo.map((item, index) => {
                            return (
                                <Partido key={index} data={item} index={index} resultsGrupo={resultsGrupo} setResultsGrupo={setResultsGrupo} color={Colors}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Grupo