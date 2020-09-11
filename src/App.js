import React,{useEffect,useState} from 'react';
import './App.css';
import Practice from './components/practice/Practice';
import Login from './components/practice/Login';


function App() {

  const [appState, setAppState] = useState({
    isRegistered: false
  })


  useEffect(()=>{
    const localUser = JSON.parse(sessionStorage.getItem("user"))

    if(localUser !== null){
      setAppState(
        {
          isRegistered:true
        }
      )
    }

    console.log(localUser)
    console.log("localUser:",localUser)
    // sessionStorage.removeItem('user')
    
  },[])

  return (
    <div className="App">
      {!appState.isRegistered? <Practice />: null }
      {appState.isRegistered?<Login/>:null}
    </div>
  );
}

export default App;
