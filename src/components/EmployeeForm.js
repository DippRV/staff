import {Button, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const EmployeeForm = () => {
    return (
        <form action="">
            <Grid alignItems={'flex-end'} container sm={12} spacing={3}>
                <Grid item sm={6} >
                    <TextField id="fullname"  label="ФИО"/>
                </Grid>
                <Grid item sm={6} >
                    <TextField
                        id="birthday"
                        type="date"
                        label='Дата рождения'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item sm={12} >
                    <FormControl>
                        <InputLabel htmlFor="companyPosition">Должность</InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'companyPosition',
                                id: 'companyPosition',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={1}>Position 1</option>
                            <option value={2}>Position 2</option>
                            <option value={3}>Position 3</option>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item sm={4}>
                    <FormControl>
                        <FormLabel>Пол</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender1">
                            <FormControlLabel value="female" control={<Radio />} label="Женский" />
                            <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item sm={2}>
                    <FormControl>
                        <FormGroup row>
                            <FormControlLabel
                                value="uvolen"
                                control={<Checkbox color="primary" />}
                                label="Уволен"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item sm={12} >
                    <Button variant='contained' color='primary'>Изменить</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default EmployeeForm;