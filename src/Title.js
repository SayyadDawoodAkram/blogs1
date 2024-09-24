import { memo } from "react"

const Title = () => {

    console.log("title component")
    return(<div>
        <h2>use callback memo</h2>
    </div>)
}

export default memo(Title)