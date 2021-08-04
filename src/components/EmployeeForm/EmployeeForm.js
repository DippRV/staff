import React, {useEffect, useCallback} from "react";
import {useForm} from 'react-hook-form';
import {useSelector, useDispatch} from "react-redux";
import EmployeeFormConfig from "./EmployeeFormConfig";
import DAL_STAFF from "../../DAL/Staff";
import { yupResolver } from '@hookform/resolvers/yup';
import {UpdateEmployeeAC} from "../../store/reducers/staffReducer";
import EmployeeFormView from "./EmployeeFormView";

const EmployeeForm = ({positions, sexOptions}) => {

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
        })();

    }, [selectedEmployee, setValue, SetSelectEmployee, getValues]);

    return (
        <EmployeeFormView control={control} onSubmit={onSubmit} handleSubmit={handleSubmit} errors={errors}
                          sexOptions={sexOptions} positions={positions} selectedEmployee={selectedEmployee}
        />
    );
}

export default EmployeeForm;