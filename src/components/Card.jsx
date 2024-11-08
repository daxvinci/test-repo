
const Card = ({title,date,location,category,description,image,id}) => {
    return ( 
        <div id={id} className="card-container w-full flex mb-5 p-2 gap-4 justify-between">
                    <div className="date w-[15%] p-1">{date}</div>
                    <div className="card flex gap-3 w-[80%] p-2 justify-between shadow-md rounded-md bg-gray-600 backdrop:blur-xl">
                        <div className="event-details flex flex-col gap-2">
                            <h1 className="title text-2xl">{title}</h1>
                            <h3 className="location">{location}</h3>
                            <h3 className="category">{category}</h3>
                            <h3 className="description">{description.substring(0,50)}{description.length > 50 && "...."}</h3>
                        </div>
                        <div className="event-img w-[30%] min-h-[50px]">
                            <img src={image} alt="event image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
     );
}
 
export default Card;