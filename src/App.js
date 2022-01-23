import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./components/ForgotPassword";
import { UserAuthContextProvider } from "./contexts/AuthContext";
import UpdateProfile from "./components/UpdateProfile";
import Details from "./components/Details";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
