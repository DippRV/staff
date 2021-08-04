import {Controller} from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SelectElement = ({control, name, label, error = null, positions, ...rest}) => {
    return (
        <FormControl>
            <InputLabel id={label}>{label}</InputLabel>
            <Controller control={control} name={name} render={({field: {onChange, value}}) => {
                return (
                    <Select
                        labelId={label}
                        id={name}
                        onChange={onChange}
                        value={value}
                        {...rest}
                    >
                        <MenuItem value="">Select {name}</MenuItem>
                        {positions?.map(position => {
                            return (
                                <MenuItem key={position} value={position}>{position}</MenuItem>
                            )
                        })}
                    </Select>
                );
            }}/>
            {error? <p>{error.message}</p> : null}
        </FormControl>
    )
}

export default SelectElement;