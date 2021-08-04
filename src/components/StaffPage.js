import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import StaffToolBar from "./StaffToolBar/StaffToolBar";
import StaffTable from "./StaffTable/StaffTable";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import React, {useEffect, useState} from "react";
import DAL_STAFF from "../DAL/Staff";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '100%'
        }
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        width: '100%'
    }
}));

const sexOptions = [
    {key: "Женский", value: "female"},
    {key: "Мужской", value: "male"}
]

const StaffPage = () => {
    const classes = useStyles();

    let [positions, setPositions ]  = useState(null);

    useEffect(() => {
        (async () => {
            let result = await DAL_STAFF.GetPositions();
            if (result) {
                setPositions(prev => result);
            }
        })();

    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <StaffToolBar positions={positions} sexOptions={sexOptions}>
                        </StaffToolBar>
                    </Paper>
                </Grid>
                <Grid item sm={6}>
                    <StaffTable>
                    </StaffTable>
                </Grid>
                <Grid container item={true} sm={6}>
                    <Paper className={classes.paper}>
                        <EmployeeForm positions={positions} sexOptions={sexOptions}>
                        </EmployeeForm>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default StaffPage;