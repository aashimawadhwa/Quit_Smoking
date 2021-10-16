import { logDOM } from "@testing-library/react";
import react from "react";
import './day1.css';
import "../footer.css";
import logo from '../logo.png';


const day1  = () => {
    return(
        
        <>
         <div className="logo">
                            <figure>
                                <img src ={logo} alt="healthy" height="150px" width="180px"/>
                            </figure>
                            <div className="head">
           
           <p className="head-content"> DAY 1 <br></br> <br></br></p>
              
           </div>

        </div>
        <div className= "table">
      <table border="10" width="1000" height="500">
        <tr>
          <td> Meditate</td>
          <td> row 1 col 2</td>
         </tr>
         <tr>
          <td> Breathing Exercise </td>
          <td> row 1 col 2</td>
         </tr>
         <tr>
          <td> Running</td>
          <td> row 1 col 2</td>
         </tr>
         <tr>
          <td>Laugh</td>
          <td> row 1 col 2</td>
         </tr>
         <tr>
          <td>Talk your heart out  to someone you trust</td>
          <td> row 1 col 2</td>
         </tr>
         
      </table>
      </div>



      <footer>
        <div className="footer">
    <p>Made with ♥️ by Aashima Wadhwa</p>
  </div>

        </footer>
    
       
        </>

        
        
    );
}
 export default day1