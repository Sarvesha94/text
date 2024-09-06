// import About from './About';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/about';
import React, {useState} from 'react';
// import { Switch } from 'react-router-dom';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route
//   // Link
  
// }
// from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//wether dark mode is enabvle or not
  const [alert, setAlert]= useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>
    {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable","success");
      document.title='TextUtils- Dark Mode';
      // we use this for kind of advertisement
      // setInterval(()=>
      // {
      //   document.title='TextUtils is Amazing Mode';

      // }, 2000);
      // setInterval(()=>
      //   {
      //     document.title='Install TextUtils now';
  
      //   }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
      document.title='TextUtils- Light Mode';



    }
  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch>
          <Route path="/about">
            <About/>
          
          </Route>
          <Route path="/">
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>

          </Route>
</Switch> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>


 {/* <About/> */}
 {/* <About/> // */}
</div>

{/* </Router> */}

 
</>
  );
}

export default App;
