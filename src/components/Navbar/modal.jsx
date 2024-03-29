import React, { Component } from 'react';
import { send } from '@emailjs/browser';
import Resource_data_service from "../../fetch_resources"

export default class Modal extends Component{
    get_time(){

     let time = localStorage.getItem("time");
     let currentTime = new Date();
     let hour = currentTime.getHours();
     if(time == undefined){

       localStorage.setItem("time", hour);
       return "First_time";

     }else{
       if(hour > parseInt(time)){

        console.log(hour - parseInt(time))
        return( hour - parseInt(time))

       }else if(parseInt(time) >= hour){

        console.log(parseInt(time) - hour)
        return(parseInt(time) - hour)
       }
       
     }
    }
    cooldown=()=>{
     
      
      if(this.get_time() === "First_time"){
        return false;
      }else if(this.get_time() <= 3 && this.get_time() >= 0){
          return true;
        }else if(this.get_time() > 3){
          
          return false;
        }
      

    }

   return_btn_html=() => {
     if(this.cooldown() == true){
       return <h5 className="text-warning">On cooldown</h5>
     }else{
       return <button type="submit" onClick={this.send_email} id="send-btn" className="btn btn-primary">Send Email</button>
     }
   }
    async send_email(e){
      
      
      let KEYS = null;
      const close_btn = document.getElementById("closeit");
      await Resource_data_service.getall_data(true).then((response) => {
        
        
        let service_key = response.data.emailjs.service_key
        let template_key = response.data.emailjs.template_key;
        let user_key = response.data.emailjs.user_key;

        KEYS ={
          service_key: service_key,
          template_key: template_key,
          user_key: user_key
        }
        
      }).catch(() => {
        console.error("Failed to fetch resources.")
      })

      let params ={
        org_name:"kit-zone-server",
        from_name : document.getElementById("sender-name").value,
        to_name :"Saad",
        message :document.getElementById("message-text").value
        
       }
      if(params.from_name.length < 3 || params.message.length < 50){

        document.getElementById("sender-name").style.border = "4px solid red";
        document.getElementById("message-text").style.border = "4px solid red";

      }else{
        document.getElementById("send-btn").outerHTML = `<h2>Loading</h2>`
        await send(KEYS.service_key, KEYS.template_key, params, KEYS.user_key ).then((response) => {
         
         if(response.status === 200){
          let new_time = new Date();
          close_btn.click()
           window.location.reload();
           alert("Email has been sent successfully,\nThank you for your feedback!");
           localStorage.setItem("time", String(new_time.getHours()));
          

         }else{
          close_btn.click()
           alert("An error occured while trying to send an email...\n" + response.status);
           
           
         }
        })
        .catch(()=>{
          close_btn.click()
          alert("An error occured")
        })
      }
      
      
    }

    reset(){
      document.getElementById("sender-name").style.border = "0.1px solid";
      document.getElementById("message-text").style.border = "0.1px solid";
    }
    render(){
      
        return(
          <React.Fragment>
            <div className="modal fade" id="email" aria-labelledby="emailModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="emailModal">Compose Email</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={this.reset} 
                  aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="col-form-label">Your Names:</label>
                      <input type="text"  placeholder="Minimum 8 characters" className="form-control" id="sender-name"></input>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Message:</label>
                      <textarea min="50" placeholder="Minimum 50 characters" className="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeit">Close</button>
                  {this.return_btn_html()}
                  <div className="container">
                  
                  </div>
                  
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
          </React.Fragment>
        );

      
    }
}
