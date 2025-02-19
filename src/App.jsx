import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Gallery from "./Gallery";
import About from "./About";
import PhotoPage from "./PhotoPage";
import Footer from "./Footer";
import './App.css'

function App() {
  return (
    <>    
      <Header/>
        <Routes>
          <Route path="/" element={<><About/><Gallery/></>} />
          <Route path="/photo/:name" element={<PhotoPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
