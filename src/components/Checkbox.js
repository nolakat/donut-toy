import React from "react";
import '../styles/Interface.scss';

const Checkbox = (props) => {
    return(
        <>
            <label class="checkbox__container">
                {props.label}
                <input type="checkbox" name="noIcing" onChange={()=> props.changed(props.value)} checked={props.value} />
                <span class="checkmark"></span>
            </label>
        </>
    )
}

export default Checkbox