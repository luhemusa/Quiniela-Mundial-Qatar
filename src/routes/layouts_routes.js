import Inicio from '../components/inicio/Inicio'
import MiQuiniela from '../components/quiniela/MiQuiniela'

export const routes = [

    { title: 'Inicio', path: `${process.env.PUBLIC_URL}/inicio`, Component: <Inicio /> }, //listo
    { title: 'Mi Quiniela', path: `${process.env.PUBLIC_URL}/mi-quiniela`, Component: <MiQuiniela /> }, //listo

 ]