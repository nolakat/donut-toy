import React, { useState } from "react"
import RadioButton from "./RadioButton"


export default ({}) => {
    const [icingColor, setIcingColor] = useState('default');

    function radioChangeHandler(colorValue){
        setIcingColor(colorValue);
        console.log('radioChanged', colorValue);
    }

    return (
        <div className="Interface__container">
            <h1>Color: {icingColor}</h1>
            <form>
                <RadioButton
                    changed={(colorValue)=> radioChangeHandler(colorValue) }
                    id="1"
                    isSelected={icingColor === 'default'}
                    label="Pink"
                    value="default"
                    name="icingOption"
                />
                <RadioButton
                    changed={(colorValue)=> radioChangeHandler(colorValue) }
                    id="2"
                    isSelected={icingColor === 'green'}
                    label="Green"
                    value="green"
                    name="icingOption"
                />
            </form>
        </div>
    )
}