import { logDOM } from "@testing-library/react";
import react from "react"
import logo from './logo.png'
import "./footer.css";
import './login.css';

const login  = () => {
    return(
        
        <>
         <div className="head">
           
           <p className="head-content">HEY BUDDY! WELCOME BACK, <br></br> <br></br>HAPPY QUITTING!! 🌻🌻🌻</p>
              
           </div>
        <div className="logo">
                            <figure>
                                <img src ={logo} alt="healthy" height="150px" width="180px"/>
                            </figure>

        </div>
        
        <section className="signup">
            
            <div className= "signup-content">
                    <div className="sign-up form">
                        <h2 className = "form-tittle">Login</h2>
                        <form className = "register-form" id="register-form">
                            <div className ="form-group">
                                
                            </div>

                            <div className ="form-group">
                                <label htmlFor ="Email Address">
                                    <i className ="zmdi zmdi-email material-icon-name"></i>

                                </label>
                                <input type="text" name="Email Address" id="Email Address" autoComplete="off" placeholder ="Email Address"></input>
                            </div>

                            <div className ="form-group">
                                <label htmlFor ="password">
                                    <i className ="zmdi zmdi-lock material-icon-name"></i>

                                </label>
                                <input type="text" name="password" id="name" autoComplete="off" placeholder ="Password"></input>
                            </div>

                            
                            <div className="from-group from-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Login"></input>

                            </div>
                            

                            
                        </form>
                        


                    </div>
                </div>
            

           
        <footer>
        <div className="footer">
    <p>Made with ♥️ by Aashima Wadhwa</p>
  </div>

        </footer>
    
        </section>
        </>
        
    );
}
 export default login







 