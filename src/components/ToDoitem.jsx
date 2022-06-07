import React , {useState} from "react";

function ToDoitem (props){

    const [strikethro, addStrike] = useState(false);

    function addStyle (){
        addStrike(prevValue => {
            return !prevValue
        })
    }
    return(
        <div   onClick= {addStyle} >
            <li style = {  { textDecoration : strikethro? "line-through" : "" }} >
                {props.text}
            </li>
        </div>
    )
}

export default  ToDoitem;