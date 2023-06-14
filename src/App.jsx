import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//routes
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

//protected-routes
import Settings from "./Pages/Settings/Settings";
import Profile from "./Pages/Profile/Profile";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} >
            <Route index element={<Profile />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
  
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
