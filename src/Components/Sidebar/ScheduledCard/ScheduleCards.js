import React,{useState,useEffect} from 'react'
import "./scheduleCards.css"

const ScheduleCards = ({storeId,item,key,setScheduleData}) => {
  
    const [showLink,setShowLink] = useState(true);

    const [showLinkD,setShowLinkD] = useState(true);

    // Add Truck Input--------------------------------------
    const [arr, setArr] = useState([]);
    const handleTruckAdd = () => {
        const add = [...arr,[]]
        setArr(add);
        setShowLink((s) => !s)

    }

    // Add Driver Input----------------------------------------
    const [arrD, setArrD] = useState([]);
    const handleDriverAdd = () => {
        const addD = [...arrD,[]]
        setArrD(addD);
        setShowLinkD((s) => !s)
    }

    // Add change Name Input-------------------
    const [showChangeInput,setShowChangeInput] = useState(true);
    const [changeInp, setChangeInp] = useState([]);

    const handleChangeName = () => {
        const changeName = [...changeInp,[]]
        setChangeInp(changeName);
        setShowChangeInput((s) => !s)

    }

    const [driverName,setDriverName] = useState("")

    const handleSave = () => {
        const newItem= {...item}
        newItem.person = driverName;

        setScheduleData(prev => {
            prev[newItem.id] = newItem
            console.log(prev)
            return prev;
        })  
        console.log(newItem) 
    }


    const handleChange = (e) => {
    
    }

    // --------Style Change for Change driver name............
    // const handleChangeDriver = (e) => {
    //     const changeD_id = document.getElementById("changeD-id");
    //     changeD_id.style.display="flex"

    //     const personContainer = document.getElementById("personContainer");
    //     personContainer.style.display="none"
    // }

    // Storing ID......
    const handleScreen=(id)=>{
        storeId(id);
    }

    // To get Date and Day.....
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

    const date = new Date(item.date);
    const day = weekday[date.getDay()]

    const handleDriverChange =() => {

    }

    const handleINPChange =(e) => {
        const inp = e.target.value;
        setDriverName(inp)
    }

    useEffect(() => {
        console.log(item)  
    }, [item])
    

  return (
    <>
    <div className='ScheduleCards' key={key}>
        <div className="ScheduleCard-container">

        <div className="main-icon">
            <div className="calenderDesign">
                <div className="calenderDot"></div>
                <div className="calenderDot1"></div>
            </div>
            <div className="S-mainIconContainer">
                <div className="DateDay">
                    <p>{day}</p>
                </div>
                <div className="ScheduleDate">
                    <p>{date.getDate()}</p>
                </div>
            </div>
        </div>


        <div className="ScheduleTripDetails">

            {/* --------------Truck Name--------- */}
            <div className="scheduleTripName" >
                {
                    item.name ?  <h3>{item.name}</h3> 
                    : (
                    <>
                    <div className="add-btn" style={{display: showLink ? "flex" : "none", alignItems:"center",cursor:"pointer"}} onClick={(e) => handleTruckAdd()}>
                        <p style={{color: "#216CB0",fontSize:"14px",fontWeight:"400",textDecoration:"underline",textDecorationColor:"#216CB0"}}>Add Truck</p>
                        <img src="./images/addBtn.svg" alt="" style={{marginLeft:"3px"}}/>
                    </div>
                    {
                        arr.map((data,i) => {
                            return(
                            
                                <div className="input-btn" style={{display:"flex",width:"250px",zIndex:"",backgroundColor:"white",height:"30px"}}>
                                    <input style={{zIndex:"2",width:"200px",padding:"5px 5px",border:"1px solid gray",outline:"none",borderRadius:"4px"}} type="text" onChange={e=>handleChange(e)}/>
                                    <button style={{cursor:"pointer",marginLeft:"5px",padding:"5px 15px",backgroundColor:"blue",border:"none",borderRadius:"4px",color:"white",zIndex:"2"}}>Save</button>
                                </div>
                            )
                        })
                    }
                    </>
                    )
                }
               
            </div>
            {/* ----------Company Name------------- */}
            <div className="companyName" style={{cursor:"pointer"}} onClick={() => handleScreen(item.id)}>
                <p>
                   { item.company[0].company1} + {item.company.length} others                    
                </p>
            </div>

            {/* ------------Route-------------- */}
            <div className="route">
                <p>{item.route}</p>
            </div>

            {/* ------------Person Name----------- */}
            <div className="person">
                {
                    item.person ? (
                        <>
                        <div className="personContainer" id='personContainer' style={{cursor:"pointer",display: showChangeInput ? "flex" : "none"}}>
                            <div className="person-img">
                                <img src="" alt="" />
                            </div>
                            <p>{item.person}</p>
                            <div className="change-name" style={{cursor:"pointer"}} onClick={() => handleChangeName()}>
                                <img src="./images/changeName.svg" alt="" />
                                <p>Change</p>
                                <img src="./images/changeNameDd.svg" alt="" />
                            </div>
                        </div>
                        {
                        changeInp.map((data,i) => {
                            return(
                                <div className="input-btn" style={{display:"flex",width:"250px",zIndex:"2",backgroundColor:"white",height:"30px"}}>
                                    <input style={{zIndex:"2",width:"200px",padding:"5px 5px",border:"1px solid gray",outline:"none",borderRadius:"4px"}} type="text" onChange={e=>handleDriverChange(e)}/>
                                    <button style={{cursor:"pointer",marginLeft:"5px",padding:"5px 15px",backgroundColor:"blue",border:"none",borderRadius:"4px",color:"white",zIndex:"2"}}>Save</button>
                                </div>
                            )
                        })
                        }

                       
                        </>
                    ) : (
                        <>
                        <div className="add-btn" style={{display: showLinkD ? "flex" : "none", alignItems:"center",cursor:"pointer"}} onClick={() => handleDriverAdd()}>
                            <img src="./images/driverName.svg" alt="" style={{marginLeft:"3px"}}/>
                            <p style={{color: "#216CB0",fontSize:"14px",fontWeight:"400",textDecoration:"underline",textDecorationColor:"#216CB0"}}>Add Driver</p>
                        </div>
                        
                        {
                        arrD.map((data,i) => {
                            return(
                                <div className="input-btn" style={{display:"flex",width:"250px",zIndex:"2",backgroundColor:"white",height:"30px"}}>
                                    <input style={{zIndex:"2",width:"200px",padding:"5px 5px",border:"1px solid gray",outline:"none",borderRadius:"4px"}} type="text" onChange={e=>handleINPChange(e)}/>
                                    <button style={{cursor:"pointer",marginLeft:"5px",padding:"5px 15px",backgroundColor:"blue",border:"none",borderRadius:"4px",color:"white",zIndex:"2"}} onClick={() => handleSave()}>Save</button>
                                </div>
                            )
                        })
                        }
                        
                        </>
                        
                    )
                }
                
            </div>
        </div>


        {/* ----------------Contact Icons------------- */}
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
            
        </div>
       
        </div>
       
    </div>
    </>
  )
}

export default ScheduleCards