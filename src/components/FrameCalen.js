import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/frameCalen.scss";
import OpenButton from "./OpenButton";
import Card from "./Card";

const localizer = momentLocalizer(moment);

const FrameCalen = () => {

  const [taskList, setTaskList] = useState([]);
  const [dataTask, setDataTask] = useState({
    title: "",
    start: "",
    end: "",
    desc: "",
  });

  const [modalCard, setModalCard] = useState(false);
  const [openTask, setOpenTask] = useState(true);

  const handleClickModal = (ev) => {
    setModalCard(true);
  };

  const handleClickButton = (ev) => {
    setOpenTask(false);
  };

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
        className="frameCalen"
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={taskList}
        
      />
      <OpenButton 
      openTask={openTask} 
      handleClickButton={handleClickButton}
      modalCard={modalCard}
        handleClickModal={handleClickModal}
        dataTask={dataTask}
        handleChangeInput={handleInput}
        handleSend={handleSend} />
      <Card
        modalCard={modalCard}
        handleClickModal={handleClickModal}
        dataTask={dataTask}
        handleChangeInput={handleInput}
        handleSend={handleSend}
      />
    </section>
  );
};

export default FrameCalen;
