import { useEffect,useState} from "react";
const useFetch=(url)=>{

    const [Data,setdata]=useState(null)
    const [pending,SetPending]=useState(true)
    const[error,setError]=useState(null)
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then((res)=>{
           if(!res.ok){
             throw Error(" Unable to fetch data")            
             
           }
            return res.json()
        }).then((data)=>{
            console.log(data)
            setdata(data)
            SetPending(false)
            setError(false)
        }).catch((err)=>{
            setError(err.message)
            SetPending(false)
            console.log(err.message)
          
            
        })
        //console.log(data)
        },2000)
    },[url])

    return {Data,pending,error}
}
export default useFetch;