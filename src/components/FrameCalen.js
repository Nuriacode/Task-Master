import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

const FrameCalen = ({taskList}) => {


   

    return (
    <section className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={taskList}
        style={{ height: "100vh", margin:"20px"}}
      />
    </section>
  );
}

export default FrameCalen;