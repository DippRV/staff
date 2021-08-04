import {Button, Grid} from "@material-ui/core";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {AddEmployeeAC, DeleteEmployeeAC, SelectEmployeeAC} from "../../store/reducers/staffReducer";
import DAL_STAFF from "../../DAL/Staff";
import {useForm} from "react-hook-form";
import EmployeeFormConfig from "../EmployeeForm/EmployeeFormConfig";
import {yupResolver} from "@hookform/resolvers/yup";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogNewEmployee from "./DialogNewEmployee";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '5px'
    }
}));

const StaffToolBar = ({positions, sexOptions}) => {
    const classes = useStyles();
    const selectedEmployee = useSelector(state => state.staff.selectedEmployee);
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = useState(false);
    const DeleteEmployee = (selectedEmployee) => {
        return (dispatch) => {
            (async () => {
                let result = await DAL_STAFF.Delete(selectedEmployee);
                if (result) {
                    dispatch(DeleteEmployeeAC(selectedEmployee));
                    dispatch(SelectEmployeeAC(null));
                }
            })();

        }
    }

    const formToggle = () => {
        setOpenForm(prev => !prev);
    }

    const closeForm = () => {
        reset();
        formToggle();
    }

    const {handleSubmit, control, formState:{errors}, reset} = useForm({
        defaultValues: EmployeeFormConfig.GetEmptyEmployeeData(),
        resolver: yupResolver(EmployeeFormConfig.EmployeeSchema)
    });
    const onSubmit = (data) => {
        (async () => {
            let result = await DAL_STAFF.Add(data);
            if (result) {
                dispatch(AddEmployeeAC(result));
                reset();
            }
        })();
    }

    
    return (
        <>
            <Grid container item={true} sm={12} spacing={3}>
                <Button className={classes.button} variant='contained' color='primary' onClick={formToggle}>Добавить</Button>
                <Button className={classes.button} variant='contained' color-='primary' disabled={selectedEmployee? false : true} onClick={() => {dispatch(DeleteEmployee(selectedEmployee))}}>Удалить</Button>
            </Grid>
            <DialogNewEmployee control={control} errors={errors} sexOptions={sexOptions}
                               handleSubmit={handleSubmit} onSubmit={onSubmit} positions={positions}
                               closeForm={closeForm} openForm={openForm}
            />
        </>
    );
}

export default StaffToolBar;