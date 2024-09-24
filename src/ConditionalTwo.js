const ConditionalTwo = () =>{

    const subject = [ "html","css","reactjs","Angular","jqury"];
    
    if(subject.length > 0)
    {
    return(<div>
        {
            subject.map((item,index) => <p key={index}>{item}</p>)
        }
    </div>)
    }
    else
    {
        return(<div>subject not found</div>)
    }
}

export default ConditionalTwo