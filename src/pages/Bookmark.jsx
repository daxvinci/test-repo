import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
const Bookmark = ({events}) => {

    const [bookmark, setBookmark] = useState([])

    useEffect(()=>{
        const marked = events.filter((event)=> event.bookmarked === "true")
        setBookmark(marked)
    },[events])

    return ( 
        <>
        < Header />
        <div className="flex min-h-screen w-full">
            <div className="hello container w-[55%]  mx-auto">
                <h1 className="text-4xl mb-10">Bookmark</h1>     

                {bookmark.map((event,index) => (
                    < Card 
                    key={index}
                    id={index}
                    title={event.title} 
                    date = {event.date}
                    location = {event.location}
                    category = {event.category}
                    description = {event.description} 
                    image={event.image}
                    />
                ))}

                
            </div>
        </div>
        < Footer />
        </>
     );
}
 
export default Bookmark;