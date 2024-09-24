import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { deletepost,addTodo } from "../Redux/postSlice";

const Service = () =>{

    const data = useSelector((reduxState) => reduxState.posts);

    const dispatch = useDispatch();
    console.log(data)
    return(<>
    <Header />
        <div className="container py-4" >
        <h2 className="mb-4">Services</h2>
        {
            data.items.length > 0 ? data.items.map((item,index) => <div className="border my-2 p-2" key={index}>
                <h4>{item.id}</h4>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <button onClick={ () => dispatch(deletepost(item.id))} className="btn btn-sm btn-danger"> Delete </button>
                <button onClick={ () => dispatch(addTodo(item.id))} className="btn btn-sm btn-success pl-2"> Edit </button>
            </div>) : <p>No items found</p>
        }
        </div>
    <Footer />
    </>)
}

export default Service;