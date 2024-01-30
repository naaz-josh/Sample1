
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";

const SearchBar = ({placeholder,data}) => {
    let [todoData,setTodoData]=useState([])
    const HandleChange=(e)=>{
       //console.log(e.target.value)
       const serachValue= e.target.value
       const resultValue=data.data.filter((el)=>{
         return el.task.toLowerCase().includes(serachValue.toLowerCase())
       })
       setTodoData(resultValue)
       
    }
    return ( 
       <div className="search">
        <div className="searchInput">
            <input type="text" placeholder={placeholder} onChange={HandleChange}/>
            <div className="searchIcon" >
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
        <div className="searchResults">{todoData.length!==0 && 
            //console.log(data)
            //now here we have to loop throughbthe filtered data not through the actual data
           todoData.map((value,key)=>
            (
            <div class="dataItem">{value.task}</div>
            )
           )
        }</div>
       </div>
     );
}
 
export default SearchBar;


