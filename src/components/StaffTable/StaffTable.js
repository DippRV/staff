import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetStaffAC, SelectEmployeeAC} from "../../store/reducers/staffReducer";
import DAL_STAFF from "../../DAL/Staff";
import StaffTableView from "./StaffTableView";

const StaffTable = () => {

    const {staff, selectedEmployee} = useSelector(state => state.staff);
    const dispatch = useDispatch();

    const GetStaff = () => {
        return (dispatch) => {
            (async () => {
                dispatch(GetStaffAC(await DAL_STAFF.Get()));
            })();
        }
    }

    const SelectEmployee = (employee) => {
        return () => {
            dispatch(SelectEmployeeAC(employee));
        }
    }

    useEffect(() => {
        try {
            dispatch(GetStaff());
        }
        catch (e) {
            console.log('Server Error');
        }

    },[dispatch])

    return (
        <StaffTableView staff={staff} selectedEmployee={selectedEmployee} SelectEmployee={SelectEmployee}/>
    );
}

export default StaffTable;
