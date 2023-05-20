import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Toy from "../Pages/Toy/Toy";
import MyToys from "../Pages/MyToys/MyToys";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addToy',
          element:<AddToys></AddToys>,
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>
        },
        {
          path:'/toy/:id',
          element:<Toy></Toy>,
          loader:({params})=> fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
          path:'/myToys',
          element:<MyToys></MyToys>
        }
      ]
    },
  ]);
  export default router;