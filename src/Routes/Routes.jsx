import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Home/Details";


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
        ]
    }
])