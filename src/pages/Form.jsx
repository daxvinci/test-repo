import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const Form = () => {
    return ( 
        <>
            <div className="flex min-h-screen w-full p-5">
                <Link to="/">
                    < FaArrowCircleLeft size={40} />
                </Link>
            <div className="hello container w-[50%] p-5 mx-auto">
                <h1 className="text-4xl mb-10">Add Event</h1> {/* Might have to Component this */}
                
            </div>
        </div>
        </>
     );
}
 
export default Form;