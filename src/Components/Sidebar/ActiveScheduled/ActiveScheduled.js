import React from 'react'
import Active from './ActiveTrips/Active';
import "./activeScheduled.css"
import Scheduled from './ScheduledTrips/Scheduled';

const ActiveScheduled = () => {

  const handleChangeSch = () => {
    const sch = document.getElementById("schedule-id");
    sch.style.display= "flex"

    const act = document.getElementById("Active-id");
    act.style.display= "none"

    const under = document.getElementById("und-id");
    under.style.justifyContent= "flex-end"

    const scheduleh4 = document.getElementById("scheduleh4");
    scheduleh4.style.color= "black";
    scheduleh4.style.fontWeight= "700";

    const activeh4 = document.getElementById("activeh4");
    activeh4.style.color= "black";
    activeh4.style.fontWeight= "400";
  }

  const handleChangeAct = () => {
    const sch = document.getElementById("schedule-id");
    sch.style.display= "none"

    const act = document.getElementById("Active-id");
    act.style.display= "flex"

    const under = document.getElementById("und-id");
    under.style.justifyContent= "flex-start"

    const scheduleh4 = document.getElementById("scheduleh4");
    scheduleh4.style.color= "black";
    scheduleh4.style.fontWeight= "400";

    const activeh4 = document.getElementById("activeh4");
    activeh4.style.color= "black";
    activeh4.style.fontWeight= "700";
    
  }


  return (
  <>
    <div className="tabs">
      <div className="container">

        <div className="active" onClick={handleChangeAct}>
          <h4 id='activeh4'>Active Trips</h4>
        </div>

        <div className="schedule" onClick={handleChangeSch}>
          <h4 id='scheduleh4'>Schedule Trips</h4>
        </div>

      </div>
      <div className='underline' id="und-id">
        <div className="underline-container" ></div>
      </div>

      <Active/>

      <Scheduled/>
      
    </div>
    </>
  )
}

export default ActiveScheduled