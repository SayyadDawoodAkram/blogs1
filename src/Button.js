import { memo } from "react"

const Button = ({title,action}) => {

    console.log("button component")
    return(<div>
        <button onClick={action}>{title}</button>
    </div>)
}

export default memo(Button)