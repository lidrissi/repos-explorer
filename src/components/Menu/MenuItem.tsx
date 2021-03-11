import { Link } from "react-router-dom";

const MenuItem = ({ label, to }: any) => (
    <Link to={to} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {label}
    </Link>

);

export default MenuItem;