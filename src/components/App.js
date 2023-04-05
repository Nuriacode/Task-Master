import "../styles/App.scss";
import FrameCalen from "./FrameCalen";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Landing from "./Landing";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route 
        path="/createtask" 
        element={<FrameCalen/>} />

        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
