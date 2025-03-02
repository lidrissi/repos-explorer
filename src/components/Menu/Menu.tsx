import React from 'react';
import MenuItem from './MenuItem';


const Menu = () => {

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center bg-white rounded-3xl">
                            <img className="block h-8 w-auto" src="octocat.png" alt="explorer" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <MenuItem label="Projects" to="/projects" />
                                <MenuItem label="Users" to="/users" />
                                <MenuItem label="Topics" to="/topics" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}


export default Menu;