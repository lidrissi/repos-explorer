import { paginationInitialState } from '../Pagination/reducer';
import * as actionTypes from './actionTypes';

const initialState: RepositoryState = {
    list: [],
    fetching: false,
    ...paginationInitialState
};

const repositoryReducer = (
    state: RepositoryState = initialState,
    action: any
): RepositoryState => {
    switch (action.type) {
        case actionTypes.FETCH_REPOSITORIES_PENDING:
            return {
                ...state,
                fetching: true
            }
        case actionTypes.FETCH_REPOSITORIES_FULFILLED:
            const { data: { items } } = action.payload;

            const newItems: Repository[] = items.map((item: { [key: string]: any }) => (
                {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    issues: item.open_issues_count,
                    stars: item.stargazers_count,
                    pushedAt: item.pushed_at,

                    owner: {
                        username: item.owner?.login,
                        avatar: item.owner?.avatar_url
                    }
                }))
            console.log('payload ===', action);

            return {
                ...state,
                list: (state.page == 1) ? [...newItems] : [...state.list, ...newItems],
                fetching: false,
            };

    }
    return state
}

export default repositoryReducer;