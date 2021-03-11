import { FETCH_USERS } from "./actionTypes";

export const fetchUsers = (payload: any) => ({
    type: FETCH_USERS,
    payload
})