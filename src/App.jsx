import './App.css'
import {BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import {Routes, Route} from "react-router-dom";
import AllDrinks from "./Pages/AllDrinks/AllDrinks.jsx";
import DrinkPage from "./Pages/DrinkPage.jsx";
import AddDrink from "./Pages/Admin/AddDrink.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={'/allDrinks'} element={<AllDrinks/>}/>
        <Route path={"drink/:name"} element={<DrinkPage/>}></Route>
        <Route path={"admin/addDrink"} element={<AddDrink/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
