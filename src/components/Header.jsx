const Header = () => {
    return ( 
        <nav className = "flex gap-8 justify-between px-3 py-2">
            <div className="logo">Logo</div>
            <div className="tab flex gap-3 justify-between">
                <div className="routes">Bookmark</div>
                <div className="routes">Form</div>
                <div className="routes">Events</div>
            </div>
        </nav>
     );
}
 
export default Header;