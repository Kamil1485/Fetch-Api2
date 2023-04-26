import axios from "axios"
import { useState,useEffect} from "react";
import './App.css';

function App() {
const[randomuserDataJSON,setRandomuserDataJSON]=useState("")
const[datam,setdatam]=useState([]);
  
const fetcRandomData=()=>{
  return axios.get("https://randomuser.me/api").then(({data})=>{
console.log(data) 
    return //!! JSON.stringify(data,null,2) 
  }).catch((error)=>{alert("Hata")})
}

useEffect(()=>{
  fetcRandomData().then(randomData=>{
    setRandomuserDataJSON(randomData || "No user data ")
  })

},[])

useEffect(()=>{
  const getdata=async()=>{

    await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(data => 
     //console.log(data)
     setdatam(data)
     );
  }
  getdata()
  
},[])

console.log(datam)
  
  return (
    <div className="App"> 
  <br/>
  <pre>
  {randomuserDataJSON}
  </pre>

<h2>RANDOM KİŞİ DATA JS OBJESİ!</h2>
{datam.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>""
            </div>
         );
      })}

    </div>
  );
}

export default App;
