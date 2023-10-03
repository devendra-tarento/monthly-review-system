import { atom } from 'recoil';

export interface EmployeeDetails {
    userId: number,
    name: string,
    empRole: string,
    profilePic: string,
    managerId: string,
    menteeIds: number[]
}


export const currentEmployeeDetails = atom<EmployeeDetails>({
    key: 'currentEmployee',
    default: {} as EmployeeDetails
})