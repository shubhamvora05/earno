import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cicon from "./images/contact us.png"

function Contact() {

  const [firstname, setfName] = useState("");
  const [lastname, setlName] = useState("");
  const [emailid, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  function handlefChange(event) {
  setfName(event.target.value);
}
function handlelChange(event) {
setlName(event.target.value);
}
function handleeChange(event) {
setEmail(event.target.value);
}
function handletChange(event) {
setTitle(event.target.value);
}
function handlesChange(event) {
setSubject(event.target.value);
}



function handleClick(event) {
   event.preventDefault();
  const url = "http://127.0.0.1:5000/contact";

       var data = new URLSearchParams();
        for(const pair of new FormData(event.target)){
          data.append(pair[0],pair[1]);
        }

       fetch(url,{
           method:"post",
           mode:'no-cors',
          body: data,

       }).then(res=>res.json())
 .catch(function (error) {
   console.log('Request failed', error);
 });
 }

  return ( < div >
    <  Header / >
    < div className="blw-cnt-nav">
    < ul >
    < li > < img src = {Cicon} alt = "Contact us icon" / > < /li>
    <li>
<p>Contact Our Team</p><p className="cnt-p2">Put Your Query Here</p>
    </li>
    <li>  <img src={Cicon} className="second-img" alt="Contact us icon"/ > < /li> </ul>
    </div>

<div className="form-top"><p>Contact Us</p></div>
<div className="form-cnt">


    <form onSubmit={handleClick} >


<div className=" inpt-div">
<div className="flname">
<label htmlFor="fname">First Name</label>
    <input type="text" id="fname" onChange={handlefChange} value={firstname} name="firstname" placeholder="Your name.."/>
</div>
<div className="flname">
<label htmlFor="lname">Last Name</label>
<input type="text" id="lname" onChange={handlelChange} value={lastname} name="lastname" placeholder="Your last name.."/>
</div>
</div>
<div className="inpt-div">
<label htmlFor="eid">Email</label>
<input type="email" id="eid" onChange={handleeChange}  value={emailid} name="emailid" placeholder="Your last email"/>
</div><div className="inpt-div">
<label htmlFor="title">Title</label>
   <input type="text" id="title" onChange={handletChange} value={title} name="title" placeholder="Write Your query title" />
</div><div className="inpt-div">
<label htmlFor="subject">Subject</label>
   <textarea id="subject" onChange={handlesChange} value={subject} name="subject" placeholder="Write your messege or query"  rows="8"  ></textarea>
</div>
  <button type="submit"  value="Submit" className="form-btn">Send messege</button>
    </form>

</div>
    <Footer / >
    < /div>);

  }

  export default Contact;
