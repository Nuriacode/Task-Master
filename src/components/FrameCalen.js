import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import moment from "moment";
import 'moment/locale/es';
import 'moment-timezone';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/frameCalen.scss";
import Card from "./Card";


moment.tz.names("Europe/Paris|Europe/Monaco");
const localizer = momentLocalizer(moment);
moment.locale('es');
moment.tz.link("Europe/Paris|Europe/Monaco");



const FrameCalen = () => {
  
 
  const [taskList, setTaskList] = useState([]);
  const [dataTask, setDataTask] = useState({
    title: "",
    start: "",  
    end: "",
    desc: "",
  });

  const [taskType, setTaskType] = useState('');
  const [colorTask, setColorTask]= useState('');


  const setTaskTypeRadio = (value) =>{
    setTaskType(value)
    if (taskType==='Casa'){
      setColorTask('color_1')
    } else if (taskType==='Ocio'){
      setColorTask('color_2')
    } else if (taskType==='Trabajo'){
      setColorTask('color_3')
    }
  }


  const handleInput = (inputName, inputValue) => {
    setDataTask({ ...dataTask, [inputValue]: inputName });
  };

 

  

  

  const handleSend = () => {
    if (dataTask.start !== "" && dataTask.end !== "" && dataTask.title !== "") {
      setTaskList([...taskList, dataTask]);
      setDataTask({
        title: "",
        start: "",
        end: "",
        desc: "",
      });
    }
  };



  return (
    <section className="app">
      <Calendar
        className="app__frameCalen"
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={taskList}
      />
      <h2>TAREAS POR HACER</h2>
      <h2>TAREAS HECHAS</h2>
      <Card
        className={colorTask}
        dataTask={dataTask}
        handleChangeInput={handleInput}
        handleSend={handleSend}
        setTaskTypeRadio={setTaskTypeRadio}
        taskType={taskType}
        colorTask={colorTask}
      />
    </section>
  );
};

export default FrameCalen;
