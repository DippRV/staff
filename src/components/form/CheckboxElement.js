import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Controller} from "react-hook-form";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import React from "react";

const CheckboxElement = ({control, name, label}) => {
    return (
        <FormControl>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Controller name={name} control={control} render={({field: {onChange, value}}) => {
                            return (
                                <Checkbox color="primary" onChange={onChange} checked={value}/>
                            )
                        }}/>
                    }
                    label={label}
                    labelPlacement="start"
                />
            </FormGroup>
        </FormControl>
    )
}

export default CheckboxElement;