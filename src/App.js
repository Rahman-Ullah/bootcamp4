import React,{useState} from 'react';
import './box.css';
import './App.css';
function App() {
  let [isCoun,setCoun] = useState(1);
  let [isDay,setDay] = useState(true);
  return (
    <div className='App-header'>
      <h2>React App</h2>
      <div className={`dayColor ${isDay? 'dayColor':'nightColor'}`}>
      <h2>Your are in  <u>{isDay?'Day':'Night'}</u> Mode</h2>
     <br />
     <h3>The value of Counter is =  {isCoun}</h3>
     <br />
     <button onClick={()=>setDay(!isDay)}>Click to Change Day/Night Mode</button>
     <br />
     <button onClick={()=>setCoun(isCoun+1)}>Click to increase count</button>
      </div>
      <h3>Developed by Rahman Ullah (AI Student  PIAIC)</h3><br />
    </div>
  );
}

export default App;
