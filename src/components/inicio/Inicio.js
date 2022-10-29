import { useState } from 'react'
import { data } from '../../data/index.js'
import Grupo from '../Grupo.js'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Button } from '@mui/material';
import Octavos from '../Octavos.js';
import Cuartos from '../Cuartos.js';
import Semi from '../Semi.js';
import Final from '../Final.js';
import Completado from './Completado.js'
import { SetResults } from './use-cases/setResults.js';
import { useNavigate } from 'react-router-dom';
import LogoFinal from '../../assets/img/final.png'

const Inicio = () => {
    const [mundial, setMundial] = useState(data)
    const [resultadosSeccion, setResultadosSeccion] = useState([{}, {}, {}, {}, {}, {}, {}, {}])
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    return (
        <div >
            {
                user.quiniela === 'SI'
                    ?
                    <Completado />
                    :
                    <Formik

                        initialValues={{

                            octavo_1: '',
                            octavo_2: '',
                            octavo_3: '',
                            octavo_4: '',
                            octavo_5: '',
                            octavo_6: '',
                            octavo_7: '',
                            octavo_8: '',

                            cuarto_1: '',
                            cuarto_2: '',
                            cuarto_3: '',
                            cuarto_4: '',

                            semi_1: '',
                            semi_2: '',

                            final: '',

                        }}

                        validationSchema={Yup.object().shape({
                            //TODO
                        })}

                        onSubmit={(fields, { setSubmitting }) => {
                            const consolidado = {
                                user:  user.id,
                                fase_grupos: resultadosSeccion,
                                octavos: [
                                    fields.octavo_1, 
                                    fields.octavo_2, 
                                    fields.octavo_3,
                                    fields.octavo_4,
                                    fields.octavo_5,
                                    fields.octavo_6,
                                    fields.octavo_7,
                                    fields.octavo_8
                                ],
                                cuartos:[
                                    fields.cuarto_1,
                                    fields.cuarto_2,
                                    fields.cuarto_3,
                                    fields.cuarto_4
                                ],
                                semi: [
                                    fields.semi_1,
                                    fields.semi_2
                                ],
                                final: fields.final
                            }
                            
                            SetResults(consolidado, navigate)
                            setSubmitting(false);

                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            setFieldValue
                        }) => (
                            <Form>
                                {/* Grupos */}
                                <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">Fase de Grupos</h1> </div>
                                {
                                    mundial.grupos.length > 0 ?
                                        <div className="container-inicio" style={{ margin: '0px 10px' }}>
                                            {mundial.grupos.map((data, i) =>
                                                <div className="container-inicio-child" key={i}>
                                                    <Grupo data={data} name={`results${i}`} resultadosSeccion={resultadosSeccion} setResultadosSeccion={setResultadosSeccion} index={i} />
                                                </div>
                                            )}
                                        </div>
                                        : <h4> No se consigue información </h4>
                                }

                                <br />
                                <br />
                                <br />
                                {/* Octavos de Final */}
                                <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">8vo de Final</h1> </div>
                                <div className="container-octavos">
                                    <Octavos name={"octavo_1"} set={setFieldValue} grupo1={'GRUPO A'} grupo2={'GRUPO B'} label="1º GRUPO A - 2º GRUPO B" number="1" />
                                    <Octavos name={"octavo_2"} set={setFieldValue} grupo1={'GRUPO C'} grupo2={'GRUPO D'} label="1º GRUPO C - 2º GRUPO D" number="2" />
                                    <Octavos name={"octavo_3"} set={setFieldValue} grupo1={'GRUPO B'} grupo2={'GRUPO A'} label="1º GRUPO B - 2º GRUPO A" number="3" />
                                    <Octavos name={"octavo_4"} set={setFieldValue} grupo1={'GRUPO D'} grupo2={'GRUPO C'} label="1º GRUPO D - 2º GRUPO C" number="4" />
                                    <Octavos name={"octavo_5"} set={setFieldValue} grupo1={'GRUPO E'} grupo2={'GRUPO F'} label="1º GRUPO E - 2º GRUPO F" number="5" />
                                    <Octavos name={"octavo_6"} set={setFieldValue} grupo1={'GRUPO G'} grupo2={'GRUPO H'} label="1º GRUPO G - 2º GRUPO H" number="6" />
                                    <Octavos name={"octavo_7"} set={setFieldValue} grupo1={'GRUPO F'} grupo2={'GRUPO E'} label="1º GRUPO F - 2º GRUPO E" number="7" />
                                    <Octavos name={"octavo_8"} set={setFieldValue} grupo1={'GRUPO H'} grupo2={'GRUPO G'} label="1º GRUPO H - 2º GRUPO G" number="8" />
                                </div>
                                <br />
                                {/* Cuartos de Final */}
                                <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">4to de Final</h1> </div>
                                <div className="container-octavos">
                                    <Cuartos name={"cuarto_1"} set={setFieldValue} grupo1={values.octavo_1} grupo2={values.octavo_2} label="GANADORES PARTIDO 1 - PARTIDO 2" number="A" />
                                    <Cuartos name={"cuarto_2"} set={setFieldValue} grupo1={values.octavo_3} grupo2={values.octavo_4} label="GANADORES PARTIDO 3 - PARTIDO 4" number="B" />
                                    <Cuartos name={"cuarto_3"} set={setFieldValue} grupo1={values.octavo_5} grupo2={values.octavo_6} label="GANADORES PARTIDO 5 - PARTIDO 6" number="C" />
                                    <Cuartos name={"cuarto_4"} set={setFieldValue} grupo1={values.octavo_7} grupo2={values.octavo_8} label="GANADORES PARTIDO 7 - PARTIDO 8" number="D" />
                                </div>
                                <br />
                                {/* Semi Final */}
                                <div style={{ textAlign: 'center' }}> <h1 className="title-octavos">Semi Final</h1> </div>
                                <div className="container-octavos">
                                    <Semi name={"semi_1"} set={setFieldValue} grupo1={values.cuarto_1} grupo2={values.cuarto_2} label="GANADORES PARTIDO A - PARTIDO B" number="I" />
                                    <Semi name={"semi_2"} set={setFieldValue} grupo1={values.cuarto_3} grupo2={values.cuarto_4} label="GANADORES PARTIDO C - PARTIDO D" number="II" />
                                </div>
                                <br />
                                {/* Final */}
                                <div style={{ textAlign: 'center' }}><img src={LogoFinal} /> {/*< <h1 className="title-octavos">Gran Final</h1> */} </div>
                                <div className="container-octavos">
                                    <Final name={"final"} set={setFieldValue} grupo1={values.semi_1} grupo2={values.semi_2} label="GANADORES PARTIDO I - PARTIDO II" number="1" />
                                </div>


                                <br />
                                <br />

                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <Button variant="contained" color="success" sx={{ color: 'white', width: '30%', borderRadius: '20px' }} type="submit" disabled={isSubmitting}>
                                        Enviar Resultados
                                    </Button>
                                </div>

                            </Form>
                        )}
                    </Formik>

            }

        </div>

    )
}

export default Inicio