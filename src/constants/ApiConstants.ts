export const BASE_URL = "http://localhost:4000"

export const API_ENDPOINT = {

    LOGIN: `https://kronos.tarento.com/api/v1/user/login`,
    LOGIN_DEV: `http://kronos-dev.idc.tarento.com/login`,
    GET_USER_DETAILS: `https://kronos.tarento.com/api/v1/user/getUserProfile`,
    GET_USER_DETAILS_DEV: `https://kronos-test.idc.tarento.com/api/v1/user/getUserProfile`,
    ADD_EMPLOYEE: `${BASE_URL}/addEmployee`,
    RESULT_BY_MONTH_EMP:  `${BASE_URL}/employeeResultByMonth`

};