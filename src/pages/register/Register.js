import { Link, useNavigate } from "react-router-dom"
import { Container, Box, TextField, IconButton, Button, InputAdornment } from '@mui/material';
import { useState } from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
//css
import './Register.css'
//icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import DivMotionFade from "../../components/motion/DivMotionFade";
import { SignUp } from "./use-cases/SignUp";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Container className="login-container">
                <img src="http://gfnypanama.com/wp-content/uploads/2018/09/LOGO-CRISTALINA-PNG-HI.png" alt="logo cristalina" width="30%" />
                <h1 style={{color: 'white'}}> Registro </h1>

                <DivMotionFade>

                    <Box className="login-box">
                        <Formik

                            initialValues={{
                                name: '',
                                user: '',
                                password: '',
                                repassword: ''
                            }}

                            validationSchema={Yup.object().shape({

                                //GENERAL
                                user: Yup.string().email().required('(Requerido)'),
                                name: Yup.string().required('(Requerido)'),

                                password: Yup.string()
                                    .required('(Requerido)')
                                    .min(8, 'Minimo (8) Caracteres')
                                    .matches(
                                        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                        "La contraseña debe contener al menos un caracter en minuscula, uno en mayuscula y uno especial"),

                                repassword: Yup.string()
                                    .required('(Requerido)')
                                    .min(8, 'Minimo (8) Caracteres')
                                    .oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden'),

                            })}

                            onSubmit={(fields, { setSubmitting }) => {

                                SignUp(fields, navigate)
                                console.log("Fields: ", fields)
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
                            }) => (
                                <Form>

                                    <div className="login-form">

                                        <TextField
                                            name="name"
                                            type="text"
                                            variant="outlined"
                                            label="Nombre y Apellido"
                                            touched={touched.name}
                                            value={values.name}
                                            onChange={handleChange('name')}
                                        />
                                        <p className="login-error-input"><ErrorMessage name="name" /></p>

                                        <TextField
                                            name="user"
                                            type="text"
                                            variant="outlined"
                                            label="Correo Electronico"
                                            touched={touched.user}
                                            value={values.user}
                                            onChange={handleChange('user')}
                                        />
                                        <p className="login-error-input"><ErrorMessage name="user" /></p>


                                        <TextField
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            label="Contraseña"
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            touched={touched.password}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end" sx={{ cursor: 'pointer' }} >
                                                        {showPassword ? <VisibilityOff onClick={handleClickShowPassword} /> : <Visibility onClick={handleClickShowPassword} />}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="outlined"
                                        />
                                        <p className="login-error-input"><ErrorMessage name="password" /></p>

                                        <TextField
                                            name="repassword"
                                            type={showPassword ? "text" : "password"}
                                            label="Repita su Contraseña"
                                            value={values.repassword}
                                            onChange={handleChange('repassword')}
                                            touched={touched.repassword}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end" sx={{ cursor: 'pointer' }} >
                                                        {showPassword ? <VisibilityOff onClick={handleClickShowPassword} /> : <Visibility onClick={handleClickShowPassword} />}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="outlined"
                                        />
                                        <p className="login-error-input"><ErrorMessage name="repassword" /></p>

                                    </div>


                                    <Button variant="outlined" sx={{ color: 'rgba(5,98,182,1)', border: '2px solid rgba(5,98,182,1)', width: '70%', borderRadius: '20px' }} type="submit" disabled={isSubmitting}>
                                        Registrar
                                    </Button>
                                </Form>
                            )}
                        </Formik>

                    </Box>

                </DivMotionFade>

            </Container>
        </div>
    )
}

export default Register