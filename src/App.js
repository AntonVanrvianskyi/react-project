import {Link, Route, Routes} from "react-router-dom";

import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Home from "./components/Home/Home";
import './App.css';
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
    <ul>
      <li><Link to={'/'}>home</Link></li>
      <li><Link to={'/todos'}>todos</Link></li>
      <li><Link to={'/albums'}>albums</Link></li>
      <li><Link to={'/comments'}>comments</Link></li>
    </ul>
      <div>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/todos'} element={<Todos/>}/>
          <Route path={'/albums'} element={<Albums/>}/>

          <Route path={'/comments'} element={<Comments/>}>
             <Route path={':postId'} element={<Posts/>}/>


          </Route>


        </Routes>
      </div>
    </div>
  );
}

export default App;
