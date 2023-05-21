import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Toy from "../Pages/Toy/Toy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
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
          element:<PrivateRoutes><Toy></Toy></PrivateRoutes>,
          loader:({params})=> fetch(`https://brain-blast-tanjinahakim.vercel.app/allToys/${params.id}`)
        },
        {
          path:'/myToys',
          element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path:'/updateToy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=> fetch(`https://brain-blast-tanjinahakim.vercel.app/allToys/${params.id}`)
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]);
  export default router;