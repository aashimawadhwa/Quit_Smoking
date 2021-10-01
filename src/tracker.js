import { logDOM } from "@testing-library/react";
import react from "react"
import logo from './logo.png'
import "./footer.css";


const tracker  = () => {
    return(
        
        <>
        <div className="logo">
                            <figure>
                                <img src ={logo} alt="healthy" height="150px" width="180px"/>
                            </figure>

        </div>
        
       
       
        <footer>
        <div className="footer">
    <p>Made with ♥️ by Aashima Wadhwa</p>
        </div>

        </footer>
       
        </>
        
    );
}
 export default tracker