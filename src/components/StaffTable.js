import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StaffTable = () => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ФИО</TableCell>
                        <TableCell align="right">Дата рождения</TableCell>
                        <TableCell align="right">Пол</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right">Должность</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StaffTable;
