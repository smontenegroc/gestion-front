import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";
import Files from "./pages/Files.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

import './index.css';

function App() {
  const token = useSelector((state) => state.auth.token);
  const roleId = useSelector((state) => state.user.roleId);

  return (
    <div className="container">
      <BrowserRouter>
        <div className="main">
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoute isAllowed={!!token}/>}>
                <Route path="/home" element={<Home />} />
                <Route path="/files" element={<Files />} />
              </Route>
              <Route element={<ProtectedRoute isAllowed={!!token && roleId === 1}/>}>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:username" element={<User />} />
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


