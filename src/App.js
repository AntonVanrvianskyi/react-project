
import './App.css';
import Navigation from "./components/navigate/Navigation";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/home-page/HomePage";
import CarsPage from "./components/pages/car-page/CarsPage";

import CarFormSave from "./components/pages/car-form.page/CarFormSave";
import {useEffect, useState} from "react";
import CarFormUpdate from "./components/show form/CarFormUpdate";


function App() {
    const [showForm, setShowForm] = useState(false);
    const [updateCar, setUpdateCar] = useState([])


  return (
    <div className="App">
     <Navigation/>
        {
            showForm && <CarFormUpdate setShowForm={setShowForm} updateCar={updateCar} />
        }


        <div>
            <Routes>
                <Route path={'/Home'} element={<HomePage/>}/>
                <Route path={'/Cars'} element={<CarsPage setShowForm={setShowForm} setUpdateCar={setUpdateCar} />}/>
                <Route path={'/CarForm'} element={<CarFormSave/>}/>
            </Routes>
        </div>

    </div>

  );
}

export default App;
