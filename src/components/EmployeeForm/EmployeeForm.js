import {Button, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import React, {useEffect, useMemo, useCallback} from "react";
import {useForm, Controller} from 'react-hook-form';
import {useSelector, useDispatch} from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import EmployeeFormConfig from "./EmployeeFormConfig";
import DAL_STAFF from "../../DAL/Staff";
import { yupResolver } from '@hookform/resolvers/yup';
import {UpdateEmployeeAC} from "../../store/reducers/staffReducer";

const EmployeeForm = () => {

    const dispatch = useDispatch();
    const selectedEmployee = useSelector(state => state.staff.selectedEmployee);

    const {handleSubmit, setValue, getValues, control, formState:{errors}} = useForm({
        defaultValues: EmployeeFormConfig.GetEmptyEmployeeData(),
        resolver: yupResolver(EmployeeFormConfig.EmployeeSchema)
    });
    const onSubmit = (data) => {
        (async () => {
            let result = await DAL_STAFF.Update(data);
            if (result) {
                dispatch(UpdateEmployeeAC(result));
            }
        })();
    }
    const SetSelectEmployee = useCallback((selectedEmployee) => {
        setValue("id", selectedEmployee.id);
        setValue("name", selectedEmployee.name);
        setValue("date", selectedEmployee.date);
        setValue("position", selectedEmployee.position);
        setValue("sex", selectedEmployee.sex);
        setValue("fired", selectedEmployee.fired);
    }, [setValue]);

    useEffect(() => {
        (async () => {
            if (selectedEmployee)
                await SetSelectEmployee(selectedEmployee);
            else
                await SetSelectEmployee(EmployeeFormConfig.GetEmptyEmployeeData());
            console.log(getValues());
        })();

    }, [selectedEmployee, setValue, SetSelectEmployee, getValues]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} aria-disabled={selectedEmployee? false : true}>
            {console.log('render')}
            <Grid alignItems={'flex-end'} container item={true} sm={12} spacing={3}>
                <Grid item sm={6} >
                    <Controller name='name' control={control} render={({field: {onChange, value}}) => {
                        return (
                            <TextField id="fullname" label="ФИО" onChange={onChange} value={value} />
                        )
                    }}/>
                    {errors.name? <p>{errors.name.message}</p> : null}

                </Grid>
                <Grid item sm={6} >
                    <Controller name='date' control={control} render={({field: {onChange, value}}) => {
                        return (
                            <TextField
                                id="birthday"
                                type="date"
                                label='Дата рождения'
                                onChange={onChange}
                                value={value}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        )
                    }}/>
                </Grid>
                <Grid item sm={12} >
                    <FormControl>
                        <InputLabel id="companyPosition">Должность</InputLabel>
                        <Controller control={control} name="position" render={({field: {onChange, value}}) => {
                            return (
                                <Select
                                    labelId="companyPosition"
                                    id="companyPositionSelect"
                                    onChange={onChange}
                                    value={value}
                                >
                                    <MenuItem value=""></MenuItem>
                                    <MenuItem value="Директор">Директор</MenuItem>
                                    <MenuItem value="Зам. директора">Зам. директора</MenuItem>
                                </Select>
                            );
                        }}/>
                        {errors.position? <p>{errors.position.message}</p> : null}
                    </FormControl>
                </Grid>

                <Grid item sm={4}>
                    <FormControl>
                        <FormLabel>Пол</FormLabel>
                        <Controller control={control} name="sex" render={({field: {onChange, value}}) => {
                            return (
                                <RadioGroup row onChange={onChange} value={value}>
                                    <FormControlLabel value="female" control={<Radio />} label="Женский" />
                                    <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                                </RadioGroup>
                            );
                        }}/>
                    </FormControl>
                </Grid>
                <Grid item sm={2}>
                    <FormControl>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Controller name="fired" control={control} render={({field: {onChange, value}}) => {
                                        return (
                                            <Checkbox color="primary" onChange={onChange} checked={value}/>
                                        )
                                    }}/>
                                }
                                label="Уволен"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item sm={12} >
                    <Button variant='contained' color='primary' type="submit" disabled={selectedEmployee? false : true}>Изменить</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default EmployeeForm;