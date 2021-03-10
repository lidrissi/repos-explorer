import * as actionTypes from './actionTypes';

const initialState: RepositoryState = {
    starred: []
};

const starredReducer = (
    state: RepositoryState = initialState,
    action: any
): RepositoryState => {
    switch (action.type) {
        case actionTypes.FETCH_STARRED_REPOSITORIES_FULFILLED:
            const { data: { items } } = action.payload;
            const newItems: Repository[] = items.map((item: { [key: string]: any }) => ({
                name: item.name,
                description: item.description,
                issues: item.open_issues_count,
                stars: item.stargazers_count,
                owner: {
                    username: item.owner?.login,
                    avatar: item.owner?.avatar_url
                }
            }))
            console.log('payload ===', action);
            return {
                starred: [...newItems]
            };

    }
    return state
}

export default starredReducer;