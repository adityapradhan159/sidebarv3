import React,{useState} from 'react'
import "./activeCards.css"

const ActiveCards = ({item,storeActiveId,storeActiveClientId}) => {

const handleActiveId = (id) => {
    storeActiveId(id); 
}

const handleActiveClientId = (id) => {
    storeActiveClientId(id); 
}


  return (
    <div style={item.status == "alert" ? { backgroundColor:"#FFEFEF"} : {backgroundColor:" "} } className='ActiveCards' onClick={()=> handleActiveId(item.id,item)}>
        <div className="ActiveCard-container">

        <div className="main-icon">
            <div className="mainIconContainer">
                <img src={item.icon} alt="" />
            </div>
        </div>


        <div className="ActiveTripDetails">
            <div className="activeTripName">
                <h3 style={item.status == "alert" ? { color:"#FF0000"} : 
                item.status == "driving" ? {color:"#44B49C"} :
                item.status == "warning" ? {color:"#E78911"}:{ color:""}}>{item.name}</h3>
            </div>
            <div className="companyName" onClick={() => handleActiveClientId(item.id)}>
                <p> { item.company[0].company1} + {item.company.length} others  </p>
            </div>
            <div className="route">
                <p>{item.route}</p>
            </div>
            <div className="person">
                <div className="person-img">
                    <img src="" alt="" />
                </div>
                <p>{item.person}</p>
            </div>
        </div>

        <div className="tripContact">
            {/* ----------Contact Icons--------- */}
            <div className="tripContact-icons">
                <div className="call">
                    <img src="./images/phone.svg" alt="" />
                </div>
                <div className="message">
                    <img src="./images/Chat.svg" alt="" />
                </div>
                <div className="menu">
                    <img src="./images/verticalMenu.svg" alt="" />
                </div>

            </div>

            {/* ----------SOS Button---------- */}

            {
                item.status == "alert" ?(
                    <button style={{backgroundColor:"#BB0606", color:"white"}} className='sos-btn'>View SOS Logs</button>
                ):""
            }
            
        </div>
       
        </div>
    </div>
  )
}

export default ActiveCards