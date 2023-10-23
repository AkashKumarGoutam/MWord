import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="MWord" About="About Us" />
      <Routes>
        <Route path="" element={<Textarea/>}   />
        <Route path="/about" element={<About/>}   />

      </Routes>
{/* 
      <Router>
        <div className="container my-3">
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Textarea heading="Enter the text to analyze below" />
            </Route>
        </div>
      </Router> */}
    </>
  );
}

export default App;
