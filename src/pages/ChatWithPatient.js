import React, {useState, useEffect} from 'react';
import {Avatar} from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';
import "./chat.css"
import db from "../firebase/firebase"
import {useParams} from "react-router-dom"
import firebase from "firebase"
import Navbar from "../Components/Navbar"

function ChatWithPatient() {

    const [doctor, setDoctor] = useState("")
    const [input, setInput] = useState("")
    const doctorId = useParams()
    const  [messages, setMessages] = useState([])
    useEffect(() => {
        if(doctorId){
            db.collection("doctors").doc(doctorId.doctorID).onSnapshot(snapshot =>(
                setDoctor(snapshot.data())
            ))

            db.collection("doctors").doc(doctorId.doctorID).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot =>{
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }
        localStorage.setItem("LoggedIn", true)
    }, [])

    

    const sendMessage = (e) => {
        e.preventDefault()
        
        db.collection("doctors").doc(doctorId.doctorID).collection("messages").add({
            message: input,
            name: doctor.name,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        console.log(input)
        setInput("")
    }

    const handleChange = (e) =>  setInput(e.target.value)
    

    return (
        <div>
            <Navbar />
            <div className="chatpage">
            <div className="leftside">
            </div>
            <div className="chat">
            <div className="chat_header">
            <Avatar src={doctor.src} />
            <div className="chat_info">
                 <h3>{doctor.name}</h3>
                 {/* <p>Last seen at...</p> */}
            </div>
            </div>
            <div className="chatbody">
                {messages.map(e => (
                    <p className={`chat_message ${!(e.name === doctor.name) ? "chat_reciever" : "" }`} style={{marginBottom: "18px"}}>
                    <span className="chat_name">
                        {e.name}
                        </span>
                        {e.message}
                    <span className="chat_time">
                    {new Date(e.timestamp?.toDate()).toUTCString()}
                    </span>
                    </p>
                ))}
                
            </div>
            <div className="chat_footer">
                <form>
                    <input value={input} onChange={handleChange} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage}> <SendIcon /> </button>
                </form>
            </div>
        </div>
        <div className="rightside"></div>
        </div>
        </div>
        
        
    )
}

export default ChatWithPatient
