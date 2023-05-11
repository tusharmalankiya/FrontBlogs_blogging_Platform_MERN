import { Routes, Route } from "react-router-dom";


//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//routes
import Home from "./components/Pages/Home/Home";
import SignIn from "./components/Pages/SignIn/SignIn";
import SignUp from "./components/Pages/SignUp/SignUp";

function App() {
  return (
    <>
        <Navbar />
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

        
    </main>
    <Footer />
    </>
  );
}

export default App;
