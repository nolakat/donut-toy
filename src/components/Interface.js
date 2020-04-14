import React, { useState } from "react"
import RadioButton from "./RadioButton"


export default (props) => {
    // const [icingColor, setIcingColor] = useState('default');
    function radioChangeHandler(colorValue){
        // setIcingColor(colorValue);
        // this.props.radioChangeHandler(colorValue);
        props.icingChange(colorValue);
        console.log('icing color', props.icingColor);

    }

    return (
        <div className="Interface__container">
            <h1>Color: {props.icingColor}</h1>
            <form>
                <RadioButton
                    changed={(colorValue)=> radioChangeHandler(colorValue) }
                    id="1"
                    isSelected={props.icingColor === 'pink'}
                    label="Pink"
                    value="pink"
                    name="icingOption"
                />
                <RadioButton
                    changed={(colorValue)=> radioChangeHandler(colorValue) }
                    id="2"
                    isSelected={props.icingColor === 'green'}
                    label="Green"
                    value="green"
                    name="icingOption"
                />
                 <RadioButton
                    changed={(colorValue)=> radioChangeHandler(colorValue) }
                    id="3"
                    isSelected={props.icingColor === 'blue'}
                    label="Blue"
                    value="blue"
                    name="icingOption"
                />
            </form>
        </div>
    )
}