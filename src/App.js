
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import CarPage from "./pages/CarPage";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<NavLink to={'users'}/>}/>
          <Route path={'users'} element={<UserPage/>}/>
          <Route path={'posts'} element={<PostPage/>}/>
            <Route path={'cars'} element={<CarPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
