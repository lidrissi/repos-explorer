import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchRepositories } from '../../store/Repository/thunks';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import { setRepositoriesPage } from '../../store/Repository/actions';

const Repositories = (props: any) => {
    const [hasMore, sethasMore] = useState(true);

    useEffect(() => {
        console.log("fetch ===");

        props.fetchRepositories();
    }, [props.currentPage]);

    const loadMore = () => {
        console.log("next page");

        props.setRepositoriesPage(2)
    }

    return (
        <div className="flex flex-col">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
            >
                {props.repositories.map((repository: Repository) => <RepositoryItem key={repository.id} {...repository} />)}

            </InfiniteScroll>

        </div>
    )
}

const mapStateToProps = (state: any) => ({
    repositories: state.repositories.list,
    currentPage: state.repositories.page
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchRepositories: () => dispatch(fetchRepositories()),
    setRepositoriesPage: (page: number) => dispatch(setRepositoriesPage(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Repositories)