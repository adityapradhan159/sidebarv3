import React,{useState,useEffect} from 'react'
import Consignment from '../../../Consignment/Consignment'
import "./active.css"
import ActiveCards from './ActiveCards'

const Active = () => {

  // State to store id
  const [showActiveId,setShowActiveId] = useState(null);

  const storeActiveId = (id) => {
    setShowActiveId(id);
  }


  // State to store data from json
  const [activeData,setActiveData]=useState([]);
  
  // Fetch Data..
  const getData=()=>{
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
    getData()
  },[])


  return (
    <div className='Active' id='Active-id'>
        {
          activeData.length == 0 ?  (
            <div className="noTrips">
              <div className="notripspara">
                <p>No Trips Created Yet</p>
              </div>
              <button>
                Plan Trip +
              </button>
            </div>
          )
          :
         ( activeData.map((item) => (
            <ActiveCards item={item} storeActiveId={storeActiveId}/>
          )))
          
        }
      {
        showActiveId !== null &&  <Consignment item={activeData[showActiveId]}/>
      }
       
    </div>
  )
}

export default Active