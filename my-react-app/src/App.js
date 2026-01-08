import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import "./styles.css";
import FloatingChat from "./Components/FloatingChat";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header stays at the top of every page */}
        <Header />

        <main>
          <Routes>
            {/* Define the paths for your pages */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        <FloatingChat />

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
