function Welcome()
{
    const title = "this is title in welcome function";
    var price = 1700;
    var discount = 43;
    const welcome = () =>{
        return "welcome to react in functional components.";
    }
    return(<section>
        <h4>{welcome().substring(0,10)}</h4>
        <h2>{new Date().toLocaleString()}</h2>
        <hr />
        <p>discount:{discount}%</p>
        <h5>price:{price}</h5>
        <h2>After discount{discount}% you have to pay {price - (price * discount / 100)}</h2>
        <h4>{title+" hello"}</h4>
        <h1>this is a welcome component</h1>
        <p> this is a peragraph</p>
    </section>)
}

export default Welcome;