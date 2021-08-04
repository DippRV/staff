const GET_STAFF = "GET_STAFF";
const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
const SELECT_EMPLOYEE = "SELECT_EMPLOYEE";


const initialState = {
    staff: [],
    selectedEmployee:  null
}

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAFF:
            return {...state, staff: action.staff};
        case ADD_EMPLOYEE:
            return {...state, staff: [...state.staff, action.employee]};
        case DELETE_EMPLOYEE:
            return {...state, staff: state.staff.filter(employee => employee.id !== action.employee.id)};
        case UPDATE_EMPLOYEE:
            return {...state, staff: state.staff.map(employee => employee.id === action.employee.id ? action.employee : employee)};
        case SELECT_EMPLOYEE:
            if (!action.employee || (state.selectedEmployee && state.selectedEmployee.id === action.employee.id))
                return {...state, selectedEmployee: null};
            return {...state, selectedEmployee: action.employee};
        default:
            return state;
    }
}

export const GetStaffAC = (staff) => {return {type: GET_STAFF, staff}};
export const AddEmployeeAC = (employee) => {return {type: ADD_EMPLOYEE, employee}};
export const DeleteEmployeeAC = (employee) => {return {type: DELETE_EMPLOYEE, employee}};
export const UpdateEmployeeAC = (employee) => {return {type: UPDATE_EMPLOYEE, employee}};
export const SelectEmployeeAC = (employee) => {return {type: SELECT_EMPLOYEE, employee}};


export default staffReducer;
