import { Link } from "react-router-dom";

const Header = () => {

    const handleClick =(event)=>{
        const navLinks = document.querySelectorAll(".routes")

        navLinks.forEach(link => link.classList.remove("active"))

        event.currentTarget.classList.add("active")
    }
    return ( 
        <nav className = "flex gap-8 justify-between items-center px-4 py-3 mb-5">
            <div className="logo text-xl py-2">
                <Link to ="/">Logo</Link>
            </div>
            <div className="tab flex gap-5 w-[30%] text-gray-300 justify-between">
                    <Link onClick={handleClick} className="routes nav-item hover:border-b-2 hover:border-amber-400" to="/bookmark">Bookmark</Link>
                    <Link onClick={handleClick} className="routes nav-item hover:border-b-2 hover:border-amber-400" to="/form">Add an Event</Link>
                <div className="filter py-2">Filter</div>
            </div>
        </nav>
     );
}
 
export default Header;