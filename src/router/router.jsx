import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyArticles from "../Pages/MyArticles";
import PostArticle from "../Pages/PostArticle";
import PrivateRoutes from './PrivateRoutes'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index:true,
        Component:Home
      },
      {
        path:'/my-articles',
        element: <PrivateRoutes><MyArticles></MyArticles></PrivateRoutes> ,
      },
      {
        path:'/post-article',
        element: <PrivateRoutes><PostArticle></PostArticle></PrivateRoutes> ,
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children:[
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
  {
    path: '/*',
    element:<>errorr</>
  }
]);