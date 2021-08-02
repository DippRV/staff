import {Button} from "@material-ui/core";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {DeleteEmployeeAC} from "../store/reducers/staffReducer";
import DAL_STAFF from "../DAL/Staff";

const StaffToolBar = () => {
    const selectedEmployee = useSelector(state => state.staff.selectedEmployee);
    const dispatch = useDispatch();
    const DeleteEmployee = (selectedEmployee) => {
        return (dispatch) => {
            (async () => {
                let result = await DAL_STAFF.Delete(selectedEmployee);
                if (result)
                    dispatch(DeleteEmployeeAC(selectedEmployee));
            })();

        }
    }

    return (
        <>
            <Button variant='contained' color='primary'>Добавить</Button>
            <Button variant='contained' color-='primary' disabled={selectedEmployee? false : true} onClick={() => {dispatch(DeleteEmployee(selectedEmployee))}}>Удалить</Button>
        </>
    );
}

export default StaffToolBar;