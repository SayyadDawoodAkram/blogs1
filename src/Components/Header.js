import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalItems } from "../Redux/cartSlice";
import { hover } from "@testing-library/user-event/dist/hover";
const Header = () => {
    const data = useSelector((state) => state.counter);

    const totalItems = useSelector((state) => state.cart.cartTotalQuantity);
    const products = useSelector((state) => state.cart.items);

    console.log(totalItems)
    console.log(products)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotalItems())
    },[dispatch,products])
    return(<React.Fragment>
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counters">Counters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todos">Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">products</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <Link className="btn btn-outline-light" to="/cart">Cart({totalItems})</Link>
                    </div>
                </div>
            </div>
        </nav>
    </React.Fragment>)
}

export default Header;