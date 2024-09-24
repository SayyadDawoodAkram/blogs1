import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";
import { addToCart } from "../Redux/cartSlice";
import loading from '../images/loading.jpg';

const Products = () => {

    const products =  useSelector((state) => state.products.items);
    
    const status = useSelector((state) => state.products.status);
    const errorMsg = useSelector((state) => state.products.errorMsg);

    const dispatch = useDispatch();

    useEffect(()=>{

        if(status === "idle")
        {
            dispatch(fetchProducts())
        }

    },[dispatch,products])
    console.log(products)

    const addItemToCart = (item) => {
        const newItem = {...item,quantity: 1}
        dispatch(addToCart(newItem))
    }
    return(<React.Fragment>
        <Header/>
            <div className="container py-4" >
            <h1>Product page</h1> 
            
            {
                status === "loading" ? <img src={loading} height="100" width="100"alt="..."/> : null
            }
            
            {
                products.length > 0 ? <div className="row">
                    {
                        products.map((item,index) => <div key={index} className="col-md-4 text-center border p-2">
                            <img src={item.image} height="150" width="150" />
                            <h2>{item.title}</h2>
                            <p>Rs.{item.price}</p>
                            <button onClick={() => addItemToCart(item)} className="btn btn-sm btn-warning">Add to Cart</button>
                        </div>)
                    }
                    </div> : null 
            }  
            </div>
        <Footer/>
    </React.Fragment>)
}

export default Products;