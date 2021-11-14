import { useState } from "react";
import axios from "axios"
export const Contact = () => {

const [name,setName]= useState("")
const [email,setEmail]= useState("")
const [msg,setMSG]= useState("")

const sendEmail=async(e)=>{
try {
e.preventDefault()
  if(name==="" || email==="" || msg===""){
alert("all fields are required")
  }else{
    const response = await axios.post(`https://apiinstaclone.herokuapp.com/send_email_for_contact`, {
      name,
      email,
      msg
    });

    if(response.data==="sent"){
      alert("The message has been sent to Lal Chand, he will contact you soon")
      setName("")
      setEmail("")
      setMSG("")
    }else{
      alert("something going wrong please try again")
    }


  }
  
} catch (error) {
  console.log(error)
  alert(error.message)
}



}


  return (
    <div id="contact" class="col-sm-12">
      <div class="row eighth_row">
        <div class="col-md-12">
          <h1>Contact</h1>
          <p>Let's Start Conversation</p>
        </div>

        <div class="col-md-6">
          <form>
            <h3>
              <i class="fa fa-location-arrow mr-3 fa-lg"></i>Leave a message
              <i class="fa fa-location-arrow ml-3 fa-lg"></i>
            </h3>
            <div class="form-group">
              <input
                type="text"
                onChange={(e)=>{setName(e.target.value)}}
                placeholder="Full Name"
                class="form-control border btn-outline-danger"
                value={name}
              />
              <input
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="Email"
                value={email}
                class="form-control border btn-outline-danger"
              />
              <textarea
                class="message btn-outline-danger border"
                onChange={(e)=>{setMSG(e.target.value)}}
                placeholder="Message"
                value={msg}
              ></textarea>
              <input
                type="submit"
                class="btn btn-danger btn-outline-success btn_send_message"
                value="Send message"
                onClick={sendEmail}
              />
            </div>
          </form>
        </div>

        <div class="col-md-6">
          <div class="contact">
            <img src="images/my_photo.jpg" class="contact_image" />
            <div class="contact_details">
              <h3>lal chand teli</h3>
              <a
                href="https://www.google.co.in/maps/place/Raila,+Rajasthan+311024/@25.6330082,74.5917722,14z/data=!4m5!3m4!1s0x3969202ebba8521d:0x1f0a48d962109571!8m2!3d25.6335944!4d74.5965278"
                target="_blank"
              >
                <i class="fas fa-map-marker-alt mr-3"></i>Raila Bhilwara
                Rajasthan India - 311024
              </a>
              <p>
                <i class="fas fa-mobile-alt mr-3"></i>+91 8769280061
              </p>
              <a href="mailto:lalchandteli13@gmail.com">
                <i class="fa fa-envelope mr-3"></i>
                lalchandteli13@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/lal-chand-teli-758961170/"
                target="_blank"
              >
                <i class="fa fa-linkedin mr-3"></i>lal-chand-teli
              </a>
              <a href="https://wa.me/message/XPX4A3QH262SA1" target="_blank">
                <i class="fab fa-whatsapp mr-3"></i>lal chand teli
              </a>

              <a
                href="resume/Resume.pdf"
                target="_blank"
                download="resume of lal chand teli"
              >
                <a
                  class="border btn_download btn btn-success btn-outline-danger"
                  href="https://res.cloudinary.com/dcxhqv5lu/raw/upload/v1636556270/Resume3_bn2blo.docx">
                Resume
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


