import Header from "../components/Header"
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = ({events}) => {
    console.log(events)
    return ( 
        <>
        < Header />
        <div className="flex min-h-screen w-full">
            <div className="hello container w-[55%]  mx-auto">
                <h1 className="text-4xl mb-10">Eventinator</h1> {/* Might have to Component this */}    

                {events.map((event,index) => (
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
 
export default Home;