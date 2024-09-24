import { memo } from "react"

const Display = (props) => {

    const{title,value} = props
    console.log("display component")
    return(<div>
        <h4>{title}:{value}</h4>
    </div>)
}

export default memo(Display)