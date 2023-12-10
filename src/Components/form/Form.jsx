import './Form.css'
import Buttons from  '../Button/Buttons'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react';


function Form() {
 

  const[name, setName] =useState(" ")
  
  const [email,setEmail] =useState(" ");
  const [text,setText]=useState(" ");
  
  const onSubmit = (event) =>{
    event.preventDefault();
   
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    }
    
  return (
  
    

    <section className="both">
      <div className='btnCls'>
      <div className='topBtn'>
     <Buttons text="VIA Support CHAT" 
     icon={<MdOutlineMessage fontSize={"24px"}/>}/>
     <Buttons 
     text="VIA Support CALL" 
     icon={<IoCallOutline fontSize={"24px"}/>}/>
    </div>
    <Buttons text="VIA EMAIL FORM" 
     icon={<MdOutlineEmail  fontSize={"24px"}/>}
     isOutline={true}/>
      <form onSubmit={onSubmit}>
      <div className="formControl">
      <label htmlFor="Name">Name</label>
      <input type="text" name="Name"></input>
      </div>
      <div className="formControl">
      <label htmlFor="email">Email</label>
      <input type="email" name="email"></input>
      </div>
      <div className="formControl">
      <label htmlFor="text">Textarea</label>
      <textarea name="text" rows="8"/>
      </div>
      <div style={{display:"flex",
      justifyContent:"end"
      }}>
      <Buttons text="SUBMIT" />
      </div>
      <div>
        {name + " " + email + " " + text }
      </div>
    </form>

    </div>
     <div className='contactImage'>
     <img src=".\images\Service 24_7-pana 1.svg" alt="form picture width:330px"/>
     </div> 
    </section>
  )
}

export default Form
