
const Card = ({title,date,location,category,description,image,id}) => {
    return ( 
        <div id={id} className="card-container w-full flex mb-5 p-2 gap-3 justify-between">
                    <div className="day w-[15%] p-1 font-semibold">
                        <div className="date">{date}</div>
                        <div className="bookmark">bookmark icon</div>
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