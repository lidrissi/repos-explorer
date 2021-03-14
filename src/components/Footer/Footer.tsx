import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white p-2 flex flex-col items-center text-sm">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="flex p-2">
                by lidrissi
            </span>
        </div>
    )
}

export default Footer;