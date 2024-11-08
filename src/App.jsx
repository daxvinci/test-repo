import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Form from "./pages/Form";
import Error404 from "./pages/Error404";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import { useState,useEffect } from "react";


function App() {
  const [events,setEvents] = useState([]);

  useEffect(()=>{
    fetch("/events.json")
    .then((res)=> res.json())
    .then((data)=>{
      setEvents(data)
      console.log(data)
    })
    .catch((err)=>console.log(err))
  },[])
  // console.log(events)

  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home events ={events} setEvents = {setEvents}/>
    },
    {
      path: "/bookmark",
      element: < Bookmark events ={events} setEvents = {setEvents}/>
    },
    {
      path: "/event/:id",
      element: < Event events ={events}/>
    },
    {
      path: "/form",
      element: < Form />
    },
    {
      path: "*",
      element: < Error404 />
    },
  ]);

  return (
    <>
    < RouterProvider router={router} />
    </>
  )
}

export default App
