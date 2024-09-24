const StyleDemo1 = () => {
    const successStyles = {color:"#fff",backgroundColor:"yellowgreen",padding:'10px',textAlign:'center'};
    const errorStyles = {color:'red',backgroundColor:'brown',padding:'10px',textAlign:'center'};
    let isValid = false;
    return (<div>
        <h3 style={{color:'blue',backgroundColor:'yellow'}}> this page is style demo</h3>
        <p> this page is style peragraph</p>
        {
          <div style= {isValid ? successStyles  : errorStyles} >
            <h1 style={isValid ? {color:'yellow'} : {color:'red'}}> hello this style page</h1>
          </div>
        }
    </div>)
}

export default StyleDemo1;