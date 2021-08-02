import axios from "axios";

const URL_STAFF = 'http://localhost:3000/staff';

const URL_EMPLOYEE = (employee) => {
    return URL_STAFF + `/${employee.id}/`;
}

const GetStaff = () => {
    return axios.get(URL_STAFF).then(resp => resp.data)
        .catch(() => null);
}

const AddEmployee = (employee) => {
    return axios.post(URL_STAFF, employee).then(resp => resp.data)
        .catch(() => null);
}

const DeleteEmployee = (employee) => {
    return axios.delete(URL_EMPLOYEE(employee)).then(resp => resp.data)
        .catch(() => null);
}

const UpdateEmployee = (employee) => {
    return axios.put(URL_EMPLOYEE(employee), employee).then(resp => resp.data)
        .catch(() => null);
}

const DAL_STAFF = {
    Get: GetStaff,
    Add: AddEmployee,
    Delete: DeleteEmployee,
    Update: UpdateEmployee
};

export default DAL_STAFF;