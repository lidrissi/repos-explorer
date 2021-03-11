import { NavLink } from "react-router-dom";

const MenuItem = ({ label, to }: any) => (
    <NavLink activeClassName="bg-gray-900 text-white" to={to} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {label}
    </NavLink>

);

export default MenuItem;