// import Bookmark from "./pages/Bookmark";
// import Home from "./pages/Home";
// import Event from "./pages/Event";
// import Form from "./pages/Form";
// import {createBrowserRouter,RouterProvider,Link,} from "react-router-dom";
import './App.css'
import Home from './pages/Home'


function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <h1>Hello World</h1>
  //         <Link to="about">About Us</Link>
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "about",
  //     element: <div>About</div>,
  //   },
  // ]);

  return (
    <>
    {/* < RouterProvider router={router} /> */}
     < Home />
    </>
  )
}

export default App
