import "../styles/App.scss";
import FrameCalen from "./FrameCalen";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Landing from "./Landing";


function App() {
  return (
    <>
      <Header
      className='header'/>
      <Routes>
        <Route 
        path="/createtask" 
        element={<FrameCalen className='allCalendar'/>} />

        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
