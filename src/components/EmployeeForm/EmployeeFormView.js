import {Button, Grid} from "@material-ui/core";
import InputElement from "../form/InputElement";
import SelectElement from "../form/SelectElement";
import RadioGroupElement from "../form/RadioGroupElement";
import CheckboxElement from "../form/CheckboxElement";
import React from "react";

const EmployeeFormView = ({control, positions, sexOptions, selectedEmployee, errors, handleSubmit, onSubmit}) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid alignItems={'flex-end'} container item={true} sm={12} spacing={3}>
                <Grid item sm={6} >
                    <InputElement error={errors.name} label="ФИО" name="name" control={control} />
                </Grid>
                <Grid item sm={6} >
                    <InputElement label="Дата рождения" name="date" type="date" control={control} InputLabelProps={{
                        shrink: true,
                    }} />
                </Grid>
                <Grid item sm={12} >
                    <SelectElement error={errors.position} control={control} name="position" label="Должность" positions={positions}/>
                </Grid>
                <Grid item sm={6}>
                    <RadioGroupElement control={control} label="Пол" name="sex" options={sexOptions}/>
                </Grid>
                <Grid item sm={2}>
                    <CheckboxElement control={control} label="Уволен" name="fired"/>
                </Grid>
                <Grid item sm={12} >
                    <Button variant='contained' color='primary' type="submit" disabled={selectedEmployee? false : true}>Изменить</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default EmployeeFormView;