import React from 'react';
import { Repository } from '../../../store/types';

const RepositoryItem = (props: Repository) => {

    return (
        <div className="p-2 bg-white flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="rounded-xl h-32 w-32" src="https://avatars.githubusercontent.com/u/11092585?s=400&u=c3bdcfadf8c2d8a5ba4906bb14e5e337fcf942ee&v=4" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{props.name}</div>
                <p className="text-gray-500">{props.description}</p>
                <div className="flex space-x-2 items-center">
                    <span className="p-2 bg-gray-900 text-white rounded-md">Stars: {props.stars}</span>
                    <span className="p-2 bg-gray-900 text-white rounded-md">Issues: {props.issues}</span>
                    <span>Submitted 30 days ago by {props.name}</span>
                </div>
            </div>
        </div>
    )
}

export default RepositoryItem;