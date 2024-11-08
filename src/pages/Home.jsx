import Header from "../components/Header"
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = ({events,setEvents}) => {
    return ( 
        <>
        < Header />
        <div className="flex min-h-screen w-full">
            <div className="hello container w-[55%]  mx-auto">
                <h1 className="text-4xl mb-10">Eventinator</h1> {/* Might have to Component this */}    

                {events.map((event,index) => (
                    < Card 
                    setEvents = {setEvents}
                    key={index}
                    id={event.eventId}
                    title={event.title} 
                    date = {event.date}
                    location = {event.location}
                    category = {event.category}
                    description = {event.description} 
                    image={event.image}
                    bookmarked={event.bookmarked}
                    />
                ))}

                
            </div>
        </div>
        < Footer />
        </>
     );
}
 
export default Home;