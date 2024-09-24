import { useEffect, useRef } from "react";

const RefDemo = () => {

    const blockRef = useRef('');

    const inputRef = useRef('');
    useEffect(()=>{
        console.log(blockRef)
        //document.getElementById("block").style.cssText = "background-color: red; color: #fff; text-align:center;padding:10px 20px;"   this is javascriopt
        inputRef.current.focus();
        blockRef.current.style.cssText = "background-color: red; color: #fff; text-align:center;padding:10px 20px;"  
    },[])
    return(<div ref={blockRef} id="block">
        <h3>RefDemo</h3>
        <input ref={inputRef} type="text" />
    </div>)
}

export default RefDemo;