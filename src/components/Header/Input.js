import { useContext, useRef } from "react";
import { useState } from "react";
import DataContext from "../Context/Context";
import classes from "./Input.module.css";


function Input(){
   const inputRef = useRef();
   
   const Cntx = useContext(DataContext)

   const RandomData= Cntx.data.map((e)=> e.country);
   const [isshow, setIsshow]= useState(false);
   const [value, setValue] = useState("");
   const [arr, setArr] = useState([]);


   
   function filterFunction(){
    setValue(inputRef.current.value);
    Cntx.isCountrySelectedHandler(false);
    localStorage.clear();
     var input = inputRef.current.value.toUpperCase();
     if(input.length >=2){
        
     var array = RandomData.filter((e)=> e.toUpperCase().indexOf(input)>-1);
    array.length=7;
     setArr(array);
     setIsshow(true)
   }
   else{
       
       setArr([]);
   }
   }
   function btnHandler(e){
       setValue(e.target.innerText);
      localStorage.setItem("country", e.target.innerText);
    //   console.log(e.target.innerText);
      Cntx.countryHandler(e.target.innerText);
      Cntx.isCountrySelectedHandler(true);
      setIsshow(false);
   }

   function changeHandler(e){
    localStorage.clear()
    setValue(e.target.value);
    
    
   }

    return(
        <>
        <div className={classes.Input}>
        <input type="text" placeholder="Search.." ref={inputRef} onKeyUp={filterFunction} onChange={changeHandler} value={value} />
        { isshow ? <div className={classes["dropdown-content"]}>{arr.map((event,index)=>
        (
           <button onClick={btnHandler} key={index} > {event}  </button>)
        )} </div> : null }
        </div>
        
        </>
    )
}

export default Input;

