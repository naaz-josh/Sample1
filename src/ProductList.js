const ProductList = ({data}) => {
    return ( 
        <div>
            <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Image</th>        
              </tr>
            </thead>
            {data.products.map((product)=>
            
            <tbody>
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <img alt="Phone" src={product.images[0]} width="30px" height="30px"></img>
              </tr>
            </tbody>
            )}
          </table>

            {console.log(data)}
        </div>
     );
}
 
export default ProductList;