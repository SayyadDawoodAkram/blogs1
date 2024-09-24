const Conditional = () => {

    const islogin = true;
    const username = "reactjs";
    return(
        <div>
            <h2>conditional component</h2>
            {
                islogin ? <h2>welcome to {username}</h2>: <p>sorry plese login</p>
            }
            {
                islogin && <h4>hello {username}</h4>
            }
        </div>
    )
}

export default Conditional