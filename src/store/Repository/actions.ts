import { paginationActionsCreator } from "../Pagination/actions";
import { FETCH_REPOSITORIES } from "./actionTypes";

export const fetchRepositories = (payload: any) => ({
    type: FETCH_REPOSITORIES,
    payload
})

export const [setRepositoriesPage, setRepositoriesPageSize] = paginationActionsCreator('REPOSITORIES');