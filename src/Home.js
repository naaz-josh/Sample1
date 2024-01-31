
import ProductList from "./ProductList";
import useFetch from "./useFetch";


const Home = () => {
    
    const {Data,pending,error}= useFetch('https://dummyjson.com/products/')
   

    return ( 
        <div className="homepage">
            <h1>Home Page</h1>
            {Data &&  <ProductList data={Data}></ProductList>}
            {error && <p>{ error }</p>}
            {pending && <h4>...Loading</h4>}
           
        </div>
     );
}
 
export default Home;