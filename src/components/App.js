import "../styles/App.scss";
import { useState } from "react";
import Card from "./Card";
import FrameCalen from "./FrameCalen";
import Header from "./Header";


function App() {

   const [eventList, setEventList] = useState({
    title:"",
    start: new Date(),
    desc: ""
   })

  return (
    <>
    <Header/>
    <main>
    <FrameCalen eventList={eventList}/>
    <Card eventList={eventList}/>
    </main>
    </>
  );
}

export default App;
