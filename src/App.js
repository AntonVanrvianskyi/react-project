
import './App.css';
import Posts from "./components/Posts/Posts";
import Lift from "./components/Lift/Lift";
import {useState} from "react";
import Fields from "./components/Fields/Fields";
import Users from "./components/Users/Users";


function App() {
    let [comLift, setComLift] = useState(null)
    const lift = (obj) => {
        setComLift({...obj})
    }


  return (
    <div className="App">

        {comLift && (<div><Lift item={comLift}/></div>)}
        <Posts lift={lift}/>
        <Fields/>
        <Users />
    </div>
  );
}

export default App;
