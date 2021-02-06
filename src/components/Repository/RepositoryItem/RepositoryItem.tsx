import React from 'react';
import { Repository } from '../../../store/types';

const RepositoryItem = (props: Repository) => {

    return (
        <div>
            {props.name}
        </div>
    )
}

export default RepositoryItem;