import { FaBookmark } from "react-icons/fa";

const Card = ({title,date,location,category,description,image,id,bookmarked,setEvents}) => {

    const handleBookmark = (id)=>{
        console.log(id)
        setEvents((prev)=>
            prev.map((newEvent)=> newEvent.eventId == id ? {...newEvent,bookmarked : !newEvent.bookmarked} : newEvent)
        )
        console.log(bookmarked)
    }

    return ( 
        <div id={id.toString()} className="card-container w-full flex mb-5 p-2 gap-3 justify-between">
                    <div className="day w-[15%] flex flex-col items-center gap-4 p-1 font-semibold">
                        <div className="date">{date}</div>
                        <div onClick={()=>handleBookmark(id)} className="bookmark cursor-pointer">
                            < FaBookmark size={20} color={bookmarked ? "#ffe300" : ""} />
                        </div>
                    </div>
                    <div className="card flex cursor-pointer gap-3 w-[80%] p-4 justify-between shadow-lg rounded-3xl backdrop:blur-xl">
                        <div className="event-details flex flex-col gap-2">
                            <h1 className="title text-2xl font-bold">{title}</h1>
                            <h3 className="location text-gray-300 font-semibold">{location}</h3>
                            <h3 className="category text-gray-300 font-semibold">{category}</h3>
                            <h3 className="description text-gray-300 font-semibold">{description.substring(0,50)}{description.length > 50 && "...."}</h3>
                        </div>
                        <div className="event-img w-[120px] rounded-2xl overflow-hidden">
                            <img src={image} alt="event image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
     );
}
 
export default Card;