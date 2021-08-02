import * as Yup from 'yup'

const EmployeeSchema = Yup.object().shape({
    id: Yup.number(),
    date: Yup.string(),
    name: Yup.string().required('Required'),
    position: Yup.string().required('Required'),
    sex: Yup.string(),
    fired: Yup.bool()
});

const GetEmptyEmployeeData = () => {
    return {
        id: 0,
        name: "",
        date: "",
        position: "",
        sex: "",
        fired: false
    };
}

export default {EmployeeSchema, GetEmptyEmployeeData};