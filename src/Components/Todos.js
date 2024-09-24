import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo,updateTodo } from "../Redux/todoSlice";

const Todos = () => {

    const [formData,setFormData] = useState({title: '', description: ''})

    const [action,setAction] = useState('Add');

    const [eid,setEid] = useState ('');

    const todos = useSelector((state) => state.todos.items)

    const dispatch = useDispatch();

    const handleInputs = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.title === "" && formData.description === "")
        {
            alert('please enter all the fields')
        }
        else
        {
            if(action === "Add")
            {
                const newData = {...formData,id: Date.now(),completed: false}

                dispatch(addTodo(newData))

                setFormData({title: '',description:''})
            }
            else
            {
                dispatch(updateTodo(formData))
                setFormData({title: '',description:''})
                setEid('');
                setAction("Add")
            }
        
        }
    }

    const editTodoItem = (id) =>{
        setAction("Edit");
        setEid(id);

        const findTodo = todos.find((item) => {
            return item.id === id
        })
        setFormData(findTodo)
    }

    const cancilupdate = () => {
        setAction("Add")
        setEid('')
        setFormData({title:'',description: ''})
    }
    return (<React.Fragment>
        <Header />
        <section>
            <div className="container py-4" >
                <h1>Todos</h1>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Title</label>
                                <input type="text" onChange={handleInputs} value={formData.title} name="title" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Descreption</label>
                                <textarea className="form-control" onChange={handleInputs} value={formData.description} name="description" ></textarea>
                            </div>
                            <div className="mb-3">
                                <input type="submit" value={action === "Add" ? "Add Todo" : "update Todo"} className="btn btn-sm btn-primary" />
                                {
                                    (action === "Edit") ? <button onClick={cancilupdate} className="btn btn-sm btn-danger mx-2">cancel</button> : null
                                }
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h3>Todos list</h3>
                        {
                            todos.length > 0 ? todos.map((item,index) =><div className={item.completed ? 'alert alert-success' : 'alert alert-warning'} key={index}> 
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <hr />
                                <button onClick={() => editTodoItem(item.id)} className='btn btn-info btn-sm mx-2'>Edit</button>
                                <button onClick={() => dispatch(removeTodo(item.id))} className='btn btn-danger btn-sm mx-2'>Delete</button>
                                <label>
                                    <input onChange={() => dispatch(toggleTodo(item.id))} type="checkbox" checked={item.completed} /> {item.completed ? 'completed' : 'mark as completed'}
                                </label>
                            </div>) : <p> File not found</p>
                        }
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </React.Fragment>)
}

export default Todos;