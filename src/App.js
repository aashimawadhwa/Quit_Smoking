import React from "react";
import { BrowserRouter as Router,Route, Switch, Link } from "react-router-dom";
import './App.css';
// import signup from './signup_page/signup.js';
// import homepage from './homepage/homepage.js';
import tracker from './tracker_page/tracker';
// import day1 from './tracker_page/day1.js';
// import login from './login_page/login';
function App() {
   return tracker(
  
      //  <Router>
      //       <div>
      //         <Link to="/">homepage</Link>

      //         <Link to="/tracker">tracker</Link>
      //       </div>
      //       <Switch>
      //        < Route path={homepage}>
      //          <homepage />
      //        </Route>
      //       </Switch>
         
      //  </Router>
   

   );
  }

  export default App 
  




 


























//
// <Router>
//   <switch>
//     <Route exact path="/signup" component={signup}/>
//     {/* <Route exact path="/tracker" component={tracker}/> */}
//   </switch>
// </Router>
//   );

//   // const hoursMinSecs = {hours:0, minutes: 15, seconds: 0}
  
//   // return (
//   //   <div className="App">
//   //       <CountDownTimer hoursMinSecs={hoursMinSecs}/>
//   //   </div>
//   // );
// 