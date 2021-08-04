import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Button, Grid} from "@material-ui/core";
import InputElement from "../form/InputElement";
import SelectElement from "../form/SelectElement";
import RadioGroupElement from "../form/RadioGroupElement";
import CheckboxElement from "../form/CheckboxElement";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '100%'
        }
    }
}));

const DialogNewEmployee = ({control, handleSubmit, onSubmit, errors, openForm, closeForm, sexOptions, positions}) => {
    const classes = useStyles();
    return (
        <Dialog open={openForm} onClose={closeForm} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New employee</DialogTitle>
            <DialogContent style={{overflow: 'hidden'}} className={classes.root} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid alignItems={'flex-end'} container item={true} sm={12} spacing={3}>
                        <Grid item sm={6} >
                            <InputElement error={errors.name} label="ФИО" name="name" control={control} />
                        </Grid>
                        <Grid item sm={6} >
                            <InputElement label="Дата рождения" name="date" type="date" control={control} InputLabelProps={{
                                shrink: true,
                            }} />
                        </Grid>
                        <Grid item sm={12} >
                            <SelectElement error={errors.position} control={control} name="position" label="Должность" positions={positions}/>
                        </Grid>
                        <Grid item sm={6}>
                            <RadioGroupElement control={control} label="Пол" name="sex" options={sexOptions}/>
                        </Grid>
                        <Grid item sm={2}>
                            <CheckboxElement control={control} label="Уволен" name="fired"/>
                        </Grid>
                    </Grid>
                    <DialogActions>
                        <Button onClick={closeForm} color="primary">Закрыть</Button>
                        <Button color='primary' type="submit">Добавить</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DialogNewEmployee;