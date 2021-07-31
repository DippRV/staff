import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import StaffToolBar from "./StaffToolBar";
import StaffTable from "./StaffTable";
import EmployeeForm from "./EmployeeForm";
import React from "react";

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

const StaffPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <StaffToolBar>
                        </StaffToolBar>
                    </Paper>
                </Grid>
                <Grid item sm={6}>
                    <StaffTable>
                    </StaffTable>
                </Grid>
                <Grid container item sm={6}>
                    <Paper className={classes.paper}>
                        <EmployeeForm>
                        </EmployeeForm>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default StaffPage;