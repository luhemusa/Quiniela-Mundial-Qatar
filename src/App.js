import { Routes, Route, Link, Navigate } from "react-router-dom"
//components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
//css
import './App.css'
import Register from "./pages/register/Register";
import { routes } from "./routes/layouts_routes";

const App = () => {

  const user = JSON.parse(localStorage.getItem('user'))


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
                  ? <Navigate to={`/inicio`} />
                  : <Navigate to={`/login`} />
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
