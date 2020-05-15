import React, {useState} from 'react'
import Child from './Child'
function TestPage(){
    const [State, setState]= useState("None");
    return(
        <>
        <div>
            {State}
        </div>
        <Child setState={setState}/>
        </>
    );
}

export default TestPage;