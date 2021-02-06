import React from 'react';
import { Repository } from '../../store/types';
import RepositoryItem from './RepositoryItem/RepositoryItem';

const RepositoriesList = (props: { repos: Repository[] }) => {

    return (
        <div>
            {props.repos.map((repository: Repository) => <RepositoryItem {...repository} />)}
        </div>
    )
}

export default RepositoriesList;