import {Button, Grid} from "@material-ui/core";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {AddEmployeeAC, DeleteEmployeeAC, SelectEmployeeAC, UpdateEmployeeAC} from "../store/reducers/staffReducer";
import DAL_STAFF from "../DAL/Staff";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Controller, useForm} from "react-hook-form";
import EmployeeFormConfig from "./EmployeeForm/EmployeeFormConfig";
import {yupResolver} from "@hookform/resolvers/yup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
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

const StaffToolBar = () => {
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
                console.log(result);
            }
        })();
    }

    
    return (
        <>
            <Button variant='contained' color='primary' onClick={formToggle}>Добавить</Button>
            <Button variant='contained' color-='primary' disabled={selectedEmployee? false : true} onClick={() => {dispatch(DeleteEmployee(selectedEmployee))}}>Удалить</Button>
            <Dialog open={openForm} onClose={closeForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New employee</DialogTitle>
                <DialogContent style={{overflow: 'hidden'}} className={classes.root} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {console.log('render')}
                        <Grid alignItems={'flex-end'} container item={true} sm={12} spacing={3}>
                            <Grid item sm={6} >
                                <Controller name='name' control={control} render={({field: {onChange, value}}) => {
                                    return (
                                        <TextField id="fullname" label="ФИО" onChange={onChange} value={value} />
                                    )
                                }}/>
                                {errors.name? <p>{errors.name.message}</p> : null}

                            </Grid>
                            <Grid item sm={6} >
                                <Controller name='date' control={control} render={({field: {onChange, value}}) => {
                                    return (
                                        <TextField
                                            id="birthday"
                                            type="date"
                                            label='Дата рождения'
                                            onChange={onChange}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )
                                }}/>
                            </Grid>
                            <Grid item sm={12} >
                                <FormControl>
                                    <InputLabel id="companyPosition">Должность</InputLabel>
                                    <Controller control={control} name="position" render={({field: {onChange, value}}) => {
                                        return (
                                            <Select
                                                labelId="companyPosition"
                                                id="companyPositionSelect"
                                                onChange={onChange}
                                                value={value}
                                            >
                                                <MenuItem value=""></MenuItem>
                                                <MenuItem value="Директор">Директор</MenuItem>
                                                <MenuItem value="Зам. директора">Зам. директора</MenuItem>
                                            </Select>
                                        );
                                    }}/>
                                    {errors.position? <p>{errors.position.message}</p> : null}
                                </FormControl>
                            </Grid>

                            <Grid item sm={6}>
                                <FormControl>
                                    <FormLabel>Пол</FormLabel>
                                    <Controller control={control} name="sex" render={({field: {onChange, value}}) => {
                                        return (
                                            <RadioGroup row onChange={onChange} value={value}>
                                                <FormControlLabel value="female" control={<Radio />} label="Женский" />
                                                <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                                            </RadioGroup>
                                        );
                                    }}/>
                                </FormControl>
                            </Grid>
                            <Grid item sm={2}>
                                <FormControl>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Controller name="fired" control={control} render={({field: {onChange, value}}) => {
                                                    return (
                                                        <Checkbox color="primary" onChange={onChange} checked={value}/>
                                                    )
                                                }}/>
                                            }
                                            label="Уволен"
                                            labelPlacement="start"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <DialogActions>
                            <Button onClick={closeForm} color="primary">Закрыть</Button>
                            <Button color='primary' type="submit">Добавить</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default StaffToolBar;