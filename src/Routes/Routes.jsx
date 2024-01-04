import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../Pages/Checkout";
import Meals from "../Pages/Meals/Meals";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../DashboardPages/UserPages/MyProfile/MyProfile";
import RequestedMeals from "../DashboardPages/UserPages/MyProfile/RequestedMeals";
import MyReviews from "../DashboardPages/UserPages/MyProfile/MyReviews";
import UpdateReview from "../DashboardPages/UserPages/MyProfile/UpdateReview";
import ManageUsers from "../DashboardPages/AdminPages/ManageUsers";
import AdminRoute from "./AdminRoute";
import AddMeal from "../DashboardPages/AdminPages/AddMeal";
import ErrorPage from "../Pages/ErrorPage";
import AllReviews from "../DashboardPages/AdminPages/AllReviews";
import AdminProfile from "../DashboardPages/AdminPages/AdminProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meals/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "meals",
        element: <Meals />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // user routes
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "requestedMeals",
        element: <RequestedMeals />
      },
      {
        path: "myReviews",
        element: <MyReviews />
      },
      {
        path: "myReviews/editReview/:id",
        element: <UpdateReview />,
        loader: ({params}) => fetch(`http://localhost:5000/oneReview/${params.id}`)
      },
      // Admin routes
      {
        path: "adminProfile",
        element: <AdminRoute><AdminProfile /></AdminRoute>
      },
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers /></AdminRoute>
      },
      {
        path: "addMeal",
        element: <AdminRoute><AddMeal /></AdminRoute>
      },
      {
        path: "allReviews",
        element: <AdminRoute><AllReviews /></AdminRoute>
      }
    ],
  },
]);
