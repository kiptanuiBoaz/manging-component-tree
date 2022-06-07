import React from "react";

function ToDoitem (props){


    
    return(
        <div   onClick= {props.onChecked()} >
            <li >
                {props.text}
            </li>
        </div>
    )
}

export default  ToDoitem;