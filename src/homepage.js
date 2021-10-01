import { logDOM } from "@testing-library/react";
import react from "react"
import './homepage.scss';
import './homepage';
import logo from './logo.png'
import "./footer.css";
import homepage1 from './homepage1.png'
import slider1 from './slider1.png'
import slider2 from './slider2.png'
import slider3 from './slider3.png'

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
               
                <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src={slider1} alt="healthy" height="600px" width="550px" />
  <div class="text"></div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src={slider2} alt="healthy" height="600px" width="550px"/>
  <div class="text"></div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src={slider3} alt="healthy" height="600px" width="550px"/>
  <div class="text"></div>
</div>

</div>
<br></br>

<div >
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>


                       
        
                </div>
          </div>
         </div>
         <div class="container4">
          <div class="row">
                <div class="col">
               
                <p>SIDE EFFECTS ARE TEMPORARY,<br></br>LOSS IS PERMAMNET! <br></br>WE ARE WITH YOU :)</p>
   

                       
        
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







 