const ConditionalOne = () => {
    const subjects = ["html","css","reactjs","Angular","jqury"];
    return(<div>
        <h4>subjects{subjects}</h4>
        {
            (subjects.length > 0) ? <ul>
                {
                    subjects.map((item,index) => <li key={index}>{item}</li>)
                }
            </ul> : <p>subject not found</p>
        }
    </div>)
}

export default ConditionalOne