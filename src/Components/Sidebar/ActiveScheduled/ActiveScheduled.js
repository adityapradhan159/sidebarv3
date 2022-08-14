import React,{useState,useEffect} from 'react'

import "./activeScheduled.css"
import ActiveCards from "../ActiveCard/ActiveCards";
import ScheduleCards from '../ScheduledCard/ScheduleCards';
import ClientDetails from '../../ClientDetailsPage/ClientDetails';
import Consignment from '../../Consignment/Consignment';

const ActiveScheduled = () => {

  // const handleChangeSch = () => {
  //   const sch = document.getElementById("schedule-id");
  //   sch.style.display= "flex"

  //   const act = document.getElementById("Active-id");
  //   act.style.display= "none"

  //   const under = document.getElementById("und-id");
  //   under.style.justifyContent= "flex-end"

  //   const scheduleh4 = document.getElementById("scheduleh4");
  //   scheduleh4.style.color= "black";
  //   scheduleh4.style.fontWeight= "700";

  //   const activeh4 = document.getElementById("activeh4");
  //   activeh4.style.color= "black";
  //   activeh4.style.fontWeight= "400";
  // }

  // const handleChangeAct = () => {
  //   const sch = document.getElementById("schedule-id");
  //   sch.style.display= "none"

  //   const act = document.getElementById("Active-id");
  //   act.style.display= "flex"

  //   const under = document.getElementById("und-id");
  //   under.style.justifyContent= "flex-start"

  //   const scheduleh4 = document.getElementById("scheduleh4");
  //   scheduleh4.style.color= "black";
  //   scheduleh4.style.fontWeight= "400";

  //   const activeh4 = document.getElementById("activeh4");
  //   activeh4.style.color= "black";
  //   activeh4.style.fontWeight= "700";
    
  // }

  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // State to store data from json
  const [activeData,setActiveData]=useState([]);
  
  // Fetch Data..
  const getActiveData=()=>{
    fetch('activeTrip.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setShowActiveId(0)
        setActiveData(myJson)
      });
  }
  useEffect(()=>{
    getActiveData()
  },[])


  const [isScreenShown, setScreenShown] = useState(false);

  const [isAccordion, setAccordion] = useState(true);

  const [showId,setShowId] = useState(null);


  const storeId = (id) => {
    setShowId(id);
    console.log(id);
    setScreenShown(true)
  }


    // State to store data from json
    const [scheduleData,setScheduleData]=useState([]);
  
    // Fetch Data..
    const getScheduleData = () => {
      fetch('scheduleTrip.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          
          setScheduleData(myJson)
        });
    }
    useEffect(()=>{
      getScheduleData()
    },[])


    const [showActiveId,setShowActiveId] = useState(null);

  const storeActiveId = (id) => {
    setShowActiveId(id);
  }


  return (
  <>
    {/* <div className="tabs">
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
      
    </div> */}


<div className="ASTabContainer">
      <div className="ASBloc-tabs">

        <button className={toggleState === 1 ? "AStabs active-tabs" : "AStabs"} onClick={() => toggleTab(1)}>
          Active Trip
        </button>

        <button className={toggleState === 2 ? "AStabs active-tabs" : "AStabs"} onClick={() => toggleTab(2)}>
          Schedule Trip
        </button>

      </div>

      <div className="AScontent-tabs">
      {/* ------------ACtive ----------------- */}
        <div className={toggleState === 1 ? "AScontent  active-content" : "AScontent"}>
        {
          activeData.map((item) =>(
            <ActiveCards item={item} storeActiveId={storeActiveId}/>
        ))
          
        }

      {
        showActiveId !== null &&  <Consignment item={activeData[showActiveId]}/>
      }
      </div>

      {/* -----------Schedule--------------- */}
        <div className={toggleState === 2 ? "AScontent  active-content" : "AScontent"}>
        <div className="months">
        <div className="month-container" onClick={() => {setAccordion(!isAccordion)}}>
        <div className="month-para">
          <p>Current Month (5)</p>
        </div>
         <div className="month-dropDown">
         <img src="./images/dropDown.svg" alt="" />
        </div>  
        </div>  
       </div>

       <div className={isAccordion ? "scheduleCard-Container" : "schedulecarD-Cont-None"} >
        {
          scheduleData.map((item) =>(
            <ScheduleCards item={item} storeId={storeId}/>
        ))
        }
        </div>

        {
          showId !== null && <ClientDetails  item={scheduleData[showId]}  isScreenShown={isScreenShown} setScreenShown={setScreenShown}/>
        }
      
        </div>

        
      </div>
    </div>
    </>
  )
}

export default ActiveScheduled