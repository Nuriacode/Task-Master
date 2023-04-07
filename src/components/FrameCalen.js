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

    
  }

  const handleInput = (inputName, inputValue) => {
    setDataTask({ ...dataTask, [inputValue]: inputName });
  };

  const colorTaksFunction = () =>{
    if (taskType==='Casa'){
      setColorTask('color_1')
    }
    if (taskType==='Ocio'){
      setColorTask('color_2')
    }
    if(taskType==='Trabajo'){
      setColorTask('color_3')
    }
  }

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
      <Card
        dataTask={dataTask}
        handleChangeInput={handleInput}
        handleSend={handleSend}
        setTaskTypeRadio={setTaskTypeRadio}
        taskType={taskType}
        colorsTaks={colorTask}
        colorTaksFunction={colorTaksFunction}
      />
    </section>
  );
};

export default FrameCalen;
