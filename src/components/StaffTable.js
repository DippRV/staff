import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {useDispatch, useSelector} from "react-redux";
import {GetStaffAC, SelectEmployeeAC} from "../store/reducers/staffReducer";
import DAL_STAFF from "../DAL/Staff";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    }
}));

const StaffTable = () => {

    const classes = useStyles();
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
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ФИО</TableCell>
                        <TableCell align="right">Дата рождения</TableCell>
                        <TableCell align="right">Пол</TableCell>
                        <TableCell align="right">Уволен</TableCell>
                        <TableCell align="right">Должность</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {staff ? staff.map((employee) => (
                        <TableRow key={employee.id} selected={selectedEmployee && selectedEmployee.id === employee.id} onClick={SelectEmployee(employee)}>
                            <TableCell component="th" scope="row">
                                {employee.name}
                            </TableCell>
                            <TableCell align="right">{employee.date}</TableCell>
                            <TableCell align="right">{employee.sex}</TableCell>
                            <TableCell align="right">{employee.fired ? 'Да' : 'Нет'}</TableCell>
                            <TableCell align="right">{employee.position}</TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StaffTable;
