import './App.css';
import './signup';
import signup from './signup';
// import './homepage';
// import homepage from './homepage';
// import './tracker';
// import tracker from './tracker';
import day1 from './day1';
import './day1';
// import './login';
// import login from './login';
import CountDownTimer from './countDownTimer';
import './countDownTimer';


function App() {

  const hoursMinSecs = {hours:0, minutes: 15, seconds: 0}
  
  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default App;
