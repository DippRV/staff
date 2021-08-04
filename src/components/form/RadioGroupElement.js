import FormLabel from "@material-ui/core/FormLabel";
import {Controller} from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";

const RadioGroupElement = ({label, control, name, options}) => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Controller control={control} name={name} render={({field: {onChange, value}}) => {
                return (
                    <RadioGroup row onChange={onChange} value={value}>
                        {options?.map((option) => {
                            return (
                                <FormControlLabel key={option.key} value={option.value} label={option.key} control={<Radio />} />
                            )
                        })}
                    </RadioGroup>
                );
            }}/>
        </FormControl>
    )
}

export default RadioGroupElement;