import './App.css';
import AllCovid from './components/AllCovid/AllCovid';
import { ContextProvider } from './components/Context/Context';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Input from './components/Header/Input';

import {useState, useEffect} from "react"



function App() {
  const [data, setData]= useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "613baafc16msh487fdb600a437f5p1ae449jsnf8acf1720170"
        }
    })
    .then(response => {
        return response.json();
    }).then((json)=>{
          // console.log(json);
          setData(json.response)
        setLoading(true)})
          .catch(err => {
       alert("Not able to fetch Data");
    });
  },[]) 
 
  
     return <div className="App">
     { loading &&
     <ContextProvider data={data}> 
       <Header />
      <Input />
      <AllCovid />
     <Countries/>
     </ContextProvider> }
     </div> 
  
}

export default App;
