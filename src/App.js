import { Routes, Route, Link, Navigate } from "react-router-dom"
//components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
//css
import './App.css'
import Register from "./pages/register/Register";
import { routes } from "./routes/layouts_routes";

const App = () => {

    const user = { 
      name: 'Luis Mujica',
      user: 'luis@luhemusadev.com',
    }

  /* const user = null */

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {routes.map(({ path, Component }, i) => (
          <Route element={<Home />} key={i}>

            <Route exact
              path={`/`}
              element={
                user !== null
                  ? <Navigate to={`${process.env.PUBLIC_URL}/inicio`} />
                  : <Navigate to={`${process.env.PUBLIC_URL}/login`} />
              }
            />

            <Route exact path={path} element={Component} />

          </Route>
        ))}
        
      </Routes>
    </div>
  );
}

export default App;
