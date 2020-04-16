import React, { useState } from "react"
import RadioButton from "./RadioButton"
import Checkbox from './Checkbox'


export default (props) => {

    function radioChangeHandler(colorValue){
        props.icingChange(colorValue);
    }

    function sprinklesChange(sprinkleValue){
        props.sprinklesChange(sprinkleValue);
    }

    let icingColors = [
        {
            label: 'Blue',
            value: '#009DDC'
        },
        {
            label: 'Mint',
            value: '#009B72'
        },
        {
            label: 'Strawberry',
            value: '#EDBFB7'
        }
    ]

    return (
        <div className="Interface__container">
            <form>
                {
                    icingColors.map((obj, index) => {
                        return <RadioButton
                                    key={index}
                                    changed={(colorValue)=> radioChangeHandler(colorValue) }
                                    id={index}
                                    isSelected={props.icingColor === obj.value}
                                    label={obj.label}
                                    value={obj.value}
                                    name="icingOption"
                                />
                    })
                }

                <Checkbox
                    name='addSprinkles'
                    changed={(sprinkleValue)=> sprinklesChange(sprinkleValue)}
                    label='Add Sprinkles'
                    value={props.addSprinkles}
                 />
            </form>
        </div>
    )
}