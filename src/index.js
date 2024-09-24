
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Counters from './Components/Counters';
import { Provider } from 'react-redux';
import storee from './Redux/storee';
import Todos from './Components/Todos';
import Products from './Components/Products';
import Cart from './Components/Cart';


console.log(storee.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <Provider store={storee}>
    <ToastContainer />
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={< Cart />} />
      </Routes>
    </BrowserRouter>
  </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
