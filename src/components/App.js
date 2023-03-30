import "../styles/App.scss";
import Card from "./Card";
import FrameCalen from "./FrameCalen";
import Header from "./Header";
import { useState } from "react";



function App() {

    const [taskList, setTaskList] = useState([])
    const [dataTask, setDataTask] = useState({
      title:"",
      start:"",
      end: "",
      desc: ""
    })



    const handleInput = (inputName, inputValue) =>{
      setDataTask({...dataTask, [inputValue] : inputName})
    }
  
    const handleSend = () => {
      if (dataTask.start !=="" && dataTask.end !=="" && dataTask.title !== "") {
        setTaskList([...taskList, dataTask])
        setDataTask({
          title:"",
          start:"",
          end: "",
          desc: ""
        })
      }
    }

   

  return (
    <>
    <Header/>
    <main>
    <FrameCalen 
    taskList={taskList}
    />
    
    <Card 
    dataTask={dataTask}
    handleChangeInput={handleInput}
    handleSend={handleSend}
    />
    </main>
    </>
  );
}

export default App;
