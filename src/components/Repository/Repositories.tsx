import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStarredRepositories } from '../../store/Repository/thunks';
import RepositoryItem from './RepositoryItem/RepositoryItem';

const Repositories = (props: any) => {

    useEffect(() => {
        props.fetchStarredRepositories();
    })

    return (
        <div className="flex flex-col">
            {props.repositories.map((repository: Repository) => <RepositoryItem {...repository} />)}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    repositories: state.repositories.starred
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchStarredRepositories: () => dispatch(fetchStarredRepositories())
})
export default connect(mapStateToProps, mapDispatchToProps)(Repositories);