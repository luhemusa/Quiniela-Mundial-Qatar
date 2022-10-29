import { Link, useNavigate } from "react-router-dom"
import { Container, Box, TextField, IconButton, Button, InputAdornment } from '@mui/material';
import { useState } from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
//css
import './Login.css'
//icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import DivMotionFade from "../../components/motion/DivMotionFade";
import { LoginUser } from "./use-cases/useLogin";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickRegister = () => {
        navigate('/register')
    };

    return (
        <div>
            <Container className="login-container">
                <img src="http://gfnypanama.com/wp-content/uploads/2018/09/LOGO-CRISTALINA-PNG-HI.png" alt="logo cristalina" width="30%" />
                <h1 style={{ color: 'white' }}> Login </h1>

                <DivMotionFade>

                    <Box className="login-box">
                        <Formik

                            initialValues={{
                                user: '',
                                password: ''
                            }}

                            validationSchema={Yup.object().shape({

                                //GENERAL
                                user: Yup.string().email().required('Requerido *'),
                                password: Yup.string().required('Requerido *'),

                            })}

                            onSubmit={(fields, { setSubmitting }) => {

                                LoginUser(fields, navigate);
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
                                            name="user"
                                            type="text"
                                            variant="outlined"
                                            label="Usuario"
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


                                        <Button variant="outlined" sx={{ color: 'rgba(5,98,182,1)', border: '2px solid rgba(5,98,182,1)', width: '100%', borderRadius: '20px' }} type="submit" disabled={isSubmitting}>
                                            Ingresar
                                        </Button>
                                    </div>



                                </Form>
                            )}
                        </Formik>

                        <br />
                        <Button variant="contained" sx={{ color: 'white', border: '2px solid rgba(5,98,182,1)', width: '100%', borderRadius: '20px' }} onClick={handleClickRegister} >
                            Registrarse
                        </Button>
                    </Box>
                </DivMotionFade>
            </Container>
        </div>
    );
}

export default Login;