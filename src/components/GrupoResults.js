
import { useEffect, useState } from "react"
import { colors } from "../constants"
import { FormatDate } from "../utils"
import PartidoResults from "./PartidoResults"

const GrupoResults = ({ results, mundial, index }) => {
    const Colors = colors[index]

    return (
        <div>
            <div className="title-group"> <h5 style={{ backgroundColor: Colors }}>{mundial.nombre}</h5> </div>
            <div className="container-group">
                <div className="container-dates">
                    {
                        mundial.grupo.map((item, index) => {
                            return (
                                <div key={index} style={{ padding: '2px 0px' }}><label> {FormatDate(item.fecha)} </label><p> {item.hora} </p></div>
                            )
                        })
                    }
                </div>
                <div className="box-group">
                    {
                        mundial.grupo.map((item, index) => {
                            return (
                                <PartidoResults key={index} data={item} results={results[index]} color={Colors}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default GrupoResults