
import './App.css';
// import Posts from "./components/Posts/Posts";
// import Lift from "./components/Lift/Lift";
// import {useState} from "react";
// import Fields from "./components/Fields/Fields";
import Users from "./components/Users/Users";
import {useState} from "react";
import Posts from "./components/Posts/Posts";
import UserPosts from "./components/UserPosts/UserPosts";
// import LiftUser from "./components/LiftUser/LiftUser";


function App() {
    // let [comLift, setComLift] = useState(null)
    // const lift = (obj) => {
    //     setComLift({...obj})
    // }
    let [userId, setUserId] = useState(null)


  return (
    <div className="App">

        {/*{comLift && (<div><Lift item={comLift}/></div>)}*/}
        {/*<Posts lift={lift}/>*/}
        {/*<Fields/>*/}
        <Users setUserId={setUserId} />
        {userId && <UserPosts userId={userId}/>}
    </div>
  );
}

export default App;
