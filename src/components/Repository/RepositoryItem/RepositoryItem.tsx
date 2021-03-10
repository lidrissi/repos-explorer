import React from 'react';
import { ReactComponent as IconStar } from 'assets/icons/star.svg';
import { ReactComponent as IconIssue } from 'assets/icons/issue.svg';

const RepositoryItem = (props: Repository) => {

    return (
        <div className="p-2 bg-white flex space-x-4">
            <div className="flex-shrink-0">
                <img className="rounded-md h-32 w-32" src={props.owner?.avatar} />
            </div>
            <div className="flex flex-col justify-around">
                <div>
                    <span className="text-xl font-medium text-black hover:underline">{props.name}</span>
                    <p className="text-gray-500">{props.description}</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <span className="p-2 bg-gray-900 text-white text-sm rounded-sm flex items-center">
                        <IconStar className="w-4 h-4 m-0.5" />
                        {props.stars}
                    </span>
                    <span className="p-2 bg-gray-900 text-white text-sm rounded-sm flex items-center">
                        <IconIssue className="w-4 h-4 m-0.5" />
                        {props.issues}
                    </span>
                    <span className="text-sm">Submitted 30 days ago by {props.owner?.username}</span>
                </div>
            </div>
        </div>
    )
}

export default RepositoryItem;