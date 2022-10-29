import { useEffect, useState } from "react"
import GrupoResults from "../GrupoResults"
import { useGetResults } from "./use-cases/useGetResults"
import { data } from '../../data/index.js'
import NotFoundResults from "./NotFoundResults"
import OctavosResults from "../OctavosResults"
import LogoFinal from '../../assets/img/final.png'

const MiQuiniela = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [dataResults, getResults] = useGetResults()
    const [mundial, setMundial] = useState(data)

    const faseGrupos = dataResults[0]
    const octavos = dataResults[1]
    const cuartos = dataResults[2]
    const semi = dataResults[3]
    const final = dataResults[4]

    useEffect(() => {
        if(user.quiniela === 'SI'){
            getResults(user.id)
        }
    }, [])

    const getResultsByGroups = (grupo) => {
        return faseGrupos.filter(item => item.grupo === grupo.charAt(grupo.length - 1))
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'white' }}>Mis Resultados </h1>
            <br />
            <br />

            {dataResults.length > 0 ?

                <>
                    {/* Grupos */}
                    <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">Fase de Grupos</h1> </div>
                    {
                        mundial.grupos.length > 0 ?
                            <div className="container-inicio" style={{ margin: '0px 10px' }}>
                                {mundial.grupos.map((data, i) =>
                                    <div className="container-inicio-child" key={i}>
                                        <GrupoResults results={getResultsByGroups(data.nombre)} mundial={data} index={i}/>
                                    </div>
                                )}
                            </div>
                            : <h4> No se consigue información </h4>
                    }

                    <br /><br /><br />
                    {/* Octavos de Final */}
                    <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">8vo de Final</h1> </div>
                    <div className="container-octavos">
                        {
                            octavos.map((data, i)=>
                                <OctavosResults results={data} key={i} />
                            )
                        }
                    </div>
                    <br />
                    {/* Octavos de Final */}
                    <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">4to de Final</h1> </div>
                    <div className="container-octavos">
                        {
                            cuartos.map((data, i)=>
                                <OctavosResults results={data} key={i} />
                            )
                        }
                    </div>
                    <br />
                    {/* Octavos de Final */}
                    <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">Semifinal</h1> </div>
                    <div className="container-octavos">
                        {
                            semi.map((data, i)=>
                                <OctavosResults results={data} key={i} />
                            )
                        }
                    </div>
                    <br />
                    {/* Octavos de Final */}
                    <div style={{ textAlign: 'center' }}> <img src={LogoFinal} /> {/* <h1 className="title-octavos">Gran Final</h1> */} </div>
                    <div className="container-octavos">
                        {
                            final.map((data, i)=>
                                <OctavosResults results={data} key={i} />
                            )
                        }
                    </div>
                    <br />

                </>

                :

                <NotFoundResults />
            }
        </div>
    )
}

export default MiQuiniela