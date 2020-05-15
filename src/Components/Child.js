import React, {useState} from 'react'
function Child(props){
    const [anotherState, setanotherState]=useState(0);
    let mydiv=<div>
    <a href="#" onClick={()=>props.setState("Child")}>
    Change State
    </a>
    </div>
    return(
        <div>
        {mydiv}
        </div>
    );
}

export default Child;