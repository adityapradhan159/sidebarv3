import React,{useState,useEffect} from 'react'
import "./activeScheduled.css"
import ActiveCards from "../ActiveCard/ActiveCards";
import ScheduleCards from '../ScheduledCard/ScheduleCards';
import ClientDetails from '../../ClientDetailsPage/ClientDetails';
import Consignment from '../../Consignment/Consignment';

const ActiveScheduled = () => {



  const [AStoggleState, setASToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setASToggleState(index);
  };

  // State to store Active data from json
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
    setScreenShown(true)
  }


    // State to store Schedule data from json
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
    <div className="ASTabContainer">

      {/* ------------Tabs--------- */}
      <div className="ASBloc-tabs">
        <button className={AStoggleState === 1 ? "AStabs active-tabs" : "AStabs"} onClick={() => toggleTab(1)}>
          Active Trips
        </button>

        <button className={AStoggleState === 2 ? "AStabs active-tabs" : "AStabs"} onClick={() => toggleTab(2)}>
          Schedule Trips
        </button>
      </div>

      <div className="AScontent-tabs">
      {/* ------------Active ----------------- */}
        <div className={AStoggleState === 1 ? "AScontent  active-content" : "AScontent"}>
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
        <div className={AStoggleState === 2 ? "AScontent  active-content" : "AScontent"}>
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
        

        {
          showId !== null && <ClientDetails  item={scheduleData[showId]}  isScreenShown={isScreenShown} setScreenShown={setScreenShown}/>
        }
        </div>
      
        </div>

        
      </div>
    </div>
    </>
  )
}

export default ActiveScheduled