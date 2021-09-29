import { logDOM } from "@testing-library/react";
import react from "react"
import './homepage.scss';
import logo from './logo.png'
import "./footer.css";

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

        
        
       
           
        
        <footer>
        <div className="footer">
    <p>Made with ♥️ by Aashima Wadhwa</p>
        </div>

        </footer>
    
    
       
        </>
        
    );
}
 export default homepage







 