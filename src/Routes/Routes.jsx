import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "details/:id",
                element: <Details />,
                loader: ({params}) => fetch(`http://localhost:5000/meals/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])