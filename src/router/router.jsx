import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AboutUs from "../Pages/AboutUs";
import MyArticles from "../Pages/MyArticles";
import PostArticle from "../Pages/PostArticle";
import AllArticles from "../Pages/AllArticles";
import PrivateRoutes from './PrivateRoutes'
import ArticleDetails from "../Pages/ArticleDetails";
import Loading from "../Components/Loading";
import CategoryArticle from "../Pages/CategoryArticle";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/all-articles',
        Component: AllArticles,
      },
      {
        path: '/about-us',
        Component: AboutUs
      },
      {
        path: '/my-articles',
        element: <PrivateRoutes><MyArticles></MyArticles></PrivateRoutes>,
      },
      {
        path: '/post-article',
        element: <PrivateRoutes><PostArticle></PostArticle></PrivateRoutes>,
      },
      {
        path: "/articles/:id",
        element: <PrivateRoutes><ArticleDetails /></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/articles/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:"/categories/:category",
        element:<CategoryArticle></CategoryArticle>
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
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
    element: <Error></Error>
  }
]);