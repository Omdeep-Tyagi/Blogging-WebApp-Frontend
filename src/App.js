import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = false;//means no loggedin user
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route path="/" exact element={<Homepage/>}></Route> 
      {/* <Route path="/post" element={<Homepage/>}></Route>  */}
      <Route path="/register" element={currentUser ? <Homepage/> : <Register />} ></Route>
      <Route path="/login" element={currentUser ? <Homepage/> : <Login />} ></Route>
      <Route path="/post/:postId" element={<Single />} ></Route> 
      <Route path="/write" element={currentUser ? <Write /> : <Register />} ></Route>
      <Route path="/settings" element={currentUser ? <Settings /> : <Register/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
