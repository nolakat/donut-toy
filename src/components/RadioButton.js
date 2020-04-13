import React, { useEffect } from "react";
import '../styles/Interface.scss'

const RadioButton = (props) =>{



    return(
        <div 
        className="RadioButton"
        >
            <input id={props.id} onChange={()=> props.changed(props.value)} name={props.name} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default RadioButton