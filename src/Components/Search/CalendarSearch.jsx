import {useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import './CalendarS.css'
// import Calendar from 'react-calendar'

const CalendarSearch = () => {
 const [date, setDate] = useState(new Date())



return (
 <div className="calendar">
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   {/* <div className="text-center">
      Selected date: {date.toDateString()}
   </div> */}
 </div>
  )

}

export default CalendarSearch;