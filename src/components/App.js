import { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./event";

const localizer = momentLocalizer(moment);


function App() {

  const [eventList, setEventList] = useState(events)

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventList}
        style={{ height: "100vh" }}
      />
    </div>
  );
}


export default App;
