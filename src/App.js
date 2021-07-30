import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Paper, Grid} from '@material-ui/core';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
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

const App = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Button variant='contained' color='primary'>Добавить</Button>
                      <Button variant='contained' color-='primary'>Удалить</Button>
                  </Paper>
              </Grid>
              <Grid item sm={6}>
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
              </Grid>
              <Grid container item sm={6}>
                  <Paper className={classes.paper}>
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

                              {/*<Grid item sm={6}>*/}
                              {/*    <FormControl>*/}
                              {/*        <InputLabel id="colleaguesLabel">Коллеги</InputLabel>*/}
                              {/*        <Select*/}
                              {/*            labelId="colleaguesLabel"*/}
                              {/*            id="colleagues"*/}
                              {/*            multiple*/}
                              {/*            input={<Input id="select-multiple-colleagues" />}*/}
                              {/*            renderValue={(selected) => (*/}
                              {/*                <div>*/}
                              {/*                    {selected.map((value) => (*/}
                              {/*                        <Chip key={value} label={value} className={classes.chip} />*/}
                              {/*                    ))}*/}
                              {/*                </div>*/}
                              {/*            )}*/}
                              {/*            MenuProps={MenuProps}*/}
                              {/*        >*/}
                              {/*            {names.map((name) => (*/}
                              {/*                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>*/}
                              {/*                    {name}*/}
                              {/*                </MenuItem>*/}
                              {/*            ))}*/}
                              {/*        </Select>*/}
                              {/*    </FormControl>*/}
                              {/*</Grid>*/}

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

                  </Paper>
              </Grid>
          </Grid>
      </div>
  )
}

export default App;
