import { FETCH_STARRED_REPOSITORIES } from "./actionTypes";

export const fetchStarredRepositories = (payload: any) => ({
    type: FETCH_STARRED_REPOSITORIES,
    payload
})