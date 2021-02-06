import React from 'react';
import { Repository } from '../../store/types';
import RepositoryItem from './RepositoryItem/RepositoryItem';

const RepositoriesList = (props: { repos: Repository[] }) => {

    return (
        <div className="flex flex-col">
            {props.repos.map((repository: Repository) => <RepositoryItem {...repository} />)}
        </div>
    )
}

export default RepositoriesList;