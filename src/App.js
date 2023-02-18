import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Err from "./pages/errPage"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";


 function App() {
  
  return( 
  <Router>
    <Routes>
  <Route exact path="/home" element={<Home/>}></Route>
  <Route exact path="/profile" element={<Profile/>}></Route>
  <Route exact path="/login" element={<Login/>}></Route>
  <Route exact path="/signup" element={<Register/>}></Route>
  {/* <Route exact path="*" element={<Err/>}></Route> */}
  </Routes>
  </Router>
  );
}

export default App;
