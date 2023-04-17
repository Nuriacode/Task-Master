import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState, useId } from "react";
import moment from "moment";
import 'moment/locale/es';
import 'moment-timezone';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/frameCalen.scss";
import Card from "./Card";
import TaskList from "./TaskList";
import TaskListDoneComponent from "./TaskListDoneComponent";


moment.tz.names("Europe/Paris|Europe/Monaco");
const localizer = momentLocalizer(moment);
moment.locale('es');
moment.tz.link("Europe/Paris|Europe/Monaco");



const FrameCalen = () => {
  
  const [id, setId] = useState(0 + 1)
  const [dataTask, setDataTask] = useState({
    title: "",
    start: "",  
    end: "",
    desc: "",
    type: "",
    done:false,
    id: 0,
  });
  const [taskList, setTaskList] = useState([]);
  const [taskListDone, setTaskListDone] = useState([]);
    

  const createId = () => {
      setId(id + 1)
      console.log(id)
    }

  const setTaskTypeRadio = (value) =>{
    setDataTask({...dataTask, type: value})
  }

  const setTaskDone = (id) =>{
    taskList[id].done = true;
    console.log(taskList)
    const taskDone = taskList[id]
    console.log(taskDone)
    setTaskListDone([...taskListDone, taskDone])
    console.log(taskListDone)
   
  }  
  


  const handleInput = (inputName, inputValue) => {
    setDataTask({ ...dataTask, [inputValue]: inputName });
  };

   const getColorTask = (taskType) => {
    if (taskType==='Casa'){
      return 'color_1';
    } else if (taskType==='Ocio'){
      return 'color_2';
    } else if (taskType==='Trabajo'){
      return 'color_3';
    }
  }

  const handleSend = () => {
    if (dataTask.start !== "" && dataTask.end !== "" && dataTask.title !== "") {
      createId()
      setTaskList([...taskList, dataTask]);
      setDataTask({
        title: "",
        start: "",
        end: "",
        desc: "",
        type: "",
        done: false,
        id: id
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
      <h2 className="app__titleTask">TAREAS POR HACER</h2>
      <TaskList
      className="app__taskList"
      setTaskDone={setTaskDone}
      taskList={taskList}
      getColorTask={getColorTask}
      />
      <h2
      className="app__titleTask"
      >TAREAS HECHAS</h2>
      <TaskListDoneComponent
      className="app__taskListDone"
      getColorTask={getColorTask}
      taskListDone={taskListDone}
      />
      {/* <TaskListDone
      setTaskDone={setTaskDone}/> */}
      <Card
         className="app__card"
        dataTask={dataTask}
        handleChangeInput={handleInput}
        handleSend={handleSend}
        setTaskTypeRadio={setTaskTypeRadio}
        taskType={dataTask.type}
        getColorTask={getColorTask}
      />
    </section>
  );
};

export default FrameCalen;
