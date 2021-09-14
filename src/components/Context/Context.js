import React from "react";
import { useState} from "react";

const  DataContext = React.createContext({
        data:[],
        isCountrySelected: false,
        isCountrySelectedHandler: ()=>{},
        country:"",
        countryHandler : ()=>{},
        sortSelected : "",
        sortSelectedHandler: ()=>{}
    });


export function ContextProvider(props){
    const [country, setCountry] = useState("");
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [sortSelected, setSortSelected] = useState("newCase");
   
    
   function countryHandler(e){
       setCountry(e);
   }
   function isCountrySelectedHandler(e){
       setIsCountrySelected(e);
   }

   function sortSelectedHandler(e){
      setSortSelected(e)
   }
    return(
        <DataContext.Provider value={{"data" : props.data,
        "isCountrySelected" : isCountrySelected,
        "isCountrySelectedHandler" : isCountrySelectedHandler,
          "country":country,
          "countryHandler" : countryHandler,
          "sortSelected" : sortSelected,
          "sortSelectedHandler": sortSelectedHandler

        }}>
            {props.children}
        </DataContext.Provider>

    )
    
}
export default DataContext;
