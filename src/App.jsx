import './App.css'
import {BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import {Routes, Route} from "react-router-dom";
import AllDrinks from "./Pages/AllDrinks/AllDrinks.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={'/allDrinks'} element={<AllDrinks/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
