import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import React from "react";

const InputElement = ({control, name, label, error = null, ...rest}) => {
    return (
        <>
            <Controller name={name} control={control} render={({field: {onChange, value}}) => {
                return (
                    <TextField id={name} label={label} onChange={onChange} value={value} {...rest}/>
                )
            }}/>
            {error? <p>{error.message}</p> : null}
        </>
    )
}

export default InputElement;
