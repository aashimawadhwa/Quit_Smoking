import { logDOM } from "@testing-library/react";
import react from "react"
import './homepage.scss';
import logo from './logo.png'
import "./footer.css";
import homepage1 from './homepage1.png'

const homepage  = () => {
    return(
        
        <>
        
       
        <div className="logo">
                            <figure>
                                <img src ={logo} alt="healthy" height="150px" width="180px"/>
                            </figure>

        </div>

        <div className= "wrap">
      
         <a class="btn" href="#">Guidance</a>
         <a class="btn" href="#">Tracker</a>
         <a class="btn" href="#">streak</a>
         <a class="btn" href="#">About</a>
        </div>

        <div class="container1">
          <div class="row">
                <div class="col">
                    <p>IT RUINS YOUR LIFE<br></br>HER LIFE <br></br>AND THIER LIFE</p>
                    <div className ="cbtn">

                    <a href="#"><span></span>QUIT NOW</a>
        
                    </div>
                </div>
          </div>
         </div>
         <div class="container2">
          <div class="row">
                <div class="col">
               
                            <figure>
                                <img src ={homepage1} alt="healthy"/>
                            </figure>

                       
        
                </div>
          </div>
         </div>
         <div class="container3">
          <div class="row">
                <div class="col">
               
                <p>IT RUINS YOUR LIFE<br></br>HER LIFE <br></br>AND THIER LIFE</p>
  

                       
        
                </div>
          </div>
         </div>
         <div class="container4">
          <div class="row">
                <div class="col">
               
                <p>IT RUINS YOUR LIFE<br></br>HER LIFE <br></br>AND THIER LIFE</p>
   

                       
        
                </div>
          </div>
         </div>


        
        
       
           
        
        <footer>
        <div className="footer">
    <p>Made with ♥️ by Aashima Wadhwa</p>
        </div>

        </footer>
    
    
       
        </>
        
    );
}
 export default homepage







 