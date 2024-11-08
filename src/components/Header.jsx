import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <nav className = "flex gap-8 justify-between items-center px-4 py-3 mb-5">
            <div className="logo text-xl">
                <Link to ="/">Logo</Link>
            </div>
            <div className="tab flex gap-3 text-gray-300 justify-between">
                <div className="routes">
                    <Link to="bookmark">Bookmark</Link>
                </div>
                <div className="routes">
                <Link to="event">Event</Link>
                </div>
                <div className="filter">Filter</div>
            </div>
        </nav>
     );
}
 
export default Header;