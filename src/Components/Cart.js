import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decrementQuantity, getTotalAmount, removeItem } from "../Redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items)
    const ta = useSelector((state) => state.cart.cartTotalAmount);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalAmount())
    },[dispatch,cartItems])
    console.log(cartItems)
    return(<React.Fragment>
        <Header />
            <section>
                <div className="container py-4">
                    <h1 className="mb-4"> Cart</h1>
                    {
                        cartItems.length > 0 ? <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>ProductName</th>
                                            <th>quantity</th>
                                            <th>unit price</th>
                                            <th>Total price</th>
                                            <th>0</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item,index) => <tr key={index}>
                                                <td>{(index + 1)}</td>
                                                <td>
                                                    <img src={item.image} height="30" width="30" className="mx-3" />
                                                    {item.title}
                                                </td>
                                                <td>
                                                    <button onClick={ () => dispatch(decrementQuantity(item))} className="btn btn-sm btn-danger mx-2">-</button>
                                                    {item.quantity}
                                                    <button  onClick={()=>dispatch(addToCart(item))} className="btn btn-sm btn-success mx-2">+</button>    
                                                </td>
                                                <td>{item.price}</td>
                                                <td>{(item.price * item.quantity).toFixed(2)}</td>
                                                <td>
                                                    <button onClick={() => dispatch(removeItem(item))} className="btn btn-sm btn-danger">Remove</button>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-around" >
                                    <div>
                                        <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                                    </div>
                                    <div>
                                        <h4>Grand Total: {ta.toFixed(2)}</h4>
                                        <button className="btn btn-success">procces to pay</button>
                                    </div>
                                </div>
                             </div> : <div className="alert alert-info">
                                <p>No items found in cart</p>
                             </div>
                    }
                </div>
            </section>
        <Footer/>
    </React.Fragment>)
}

export default Cart;