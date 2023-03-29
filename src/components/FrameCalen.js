import { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

const FrameCalen = ({eventList}) => {

   

    return (
    <section className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventList}
        style={{ height: "100vh", margin:"20px"}}
      />
    </section>
  );
}

export default FrameCalen;