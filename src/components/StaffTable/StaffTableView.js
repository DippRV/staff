import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    }
}));

const StaffTableView = ({staff, selectedEmployee, SelectEmployee}) => {
    const classes = useStyles();
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
    )
}

export default StaffTableView;