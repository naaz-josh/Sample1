import { useEffect,useState} from "react";
import ProductList from "./ProductList";

const Home = () => {
    const [data,setdata]=useState(null)
    const [pending,SetPending]=useState(true)
    const[error,setError]=useState(null)
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://dummyjson.com/products/')
        .then((res)=>{
           if(!res.ok){
             throw Error(" Unable to fetch data")            
             
           }
            return res.json()
        }).then((data)=>{
            //console.log(data)
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
        
    },[])
    
   

    return ( 
        <div className="homepage">
            <h1>Home Page</h1>
            {data &&  <ProductList data={data}></ProductList>}
            {error && <p>{ error }</p>}
            {pending && <h4>...Loading</h4>}
           
        </div>
     );
}
 
export default Home;