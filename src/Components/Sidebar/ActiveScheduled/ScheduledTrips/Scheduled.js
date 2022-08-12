import React,{useState,useEffect} from 'react'
import ScheduleCards from './ScheduleCards'
import "./scheduled.css"
import ClientDetails from '../../../ClientDetailsPage/ClientDetails'
const Scheduled = () => {

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
  const getData=()=>{
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
    getData()
  },[])




  return (
    <div className='Scheduled' id='schedule-id'>
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
            
            scheduleData.map((item,key) => (
              <>
                <ScheduleCards storeId={storeId} item={item} key={key} />
              </>
        ))}

      {
       showId !== null && <ClientDetails  item={scheduleData[showId]}  isScreenShown={isScreenShown} setScreenShown={setScreenShown}/>
      }
      
    
      </div>
    </div>
  )
}

export default Scheduled