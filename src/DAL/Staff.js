import axios from "axios";

const URL_STAFF = 'https://my-json-server.typicode.com/DippRV/staff-db/staff';
const URL_STAFF_POSITIONS = 'https://my-json-server.typicode.com/DippRV/staff-db/positions'

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

const GetPositions = () => {
    return axios.get(URL_STAFF_POSITIONS).then(resp => resp.data)
        .catch(() => null);
}

const DAL_STAFF = {
    Get: GetStaff,
    Add: AddEmployee,
    Delete: DeleteEmployee,
    Update: UpdateEmployee,
    GetPositions: GetPositions
};

export default DAL_STAFF;