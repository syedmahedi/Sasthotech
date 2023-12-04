//useEffect and useState
import { useState,useEffect } from 'react'
import './App.css'
import User,{printNmae,printAge} from './user.jsx'

function App() {
  const [count, setCount] = useState(0)

  const [name,setName] = useState("syed");

  const [windowwidth,setwindowwidth]= useState(window.innerWidth);

  //ES6
  const user= new User("mahedi",24);

  console.log(user);
  printNmae(user);
  printAge(user);
  //ES6

  const handleresize=()=>
  {
    setwindowwidth(window.innerWidth);
  }

  useEffect(()=>
  {
    window.addEventListener('resize',handleresize);
  },[])

  const setCount1=()=>{
    setName("mahedi");
  }

  useEffect(()=>
  {
    console.log("render");
  },[count,name])



  return (
    <>
      <div>
        <h2>
          Homepage
        </h2>
        <p>{name}</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className='card'>
        <button onClick={setCount1}>
          change name
        </button>
        </div>
      </div>
      <div>
        {windowwidth}
      </div>
    </>
  )
}

export default App
