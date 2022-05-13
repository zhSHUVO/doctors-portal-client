import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Login/Authentication";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route
                    path="appointment"
                    element={
                        <Authentication>
                            <Appointment />
                        </Authentication>
                    }
                />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
