import Header from "../components/Header"
import Card from "../components/Card";

const Home = ({events}) => {
    console.log(events)
    return ( 
        <>
        < Header />
        <div className="flex h-screen w-full">
            <div className="hello container w-[50%]  mx-auto">
                <h1 className="text-4xl mb-10">Eventinator</h1>     

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
        </>
     );
}
 
export default Home;