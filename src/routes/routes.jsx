import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AddFoodPage from "../pages/AddFoodPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoutes from "./PrivateRoutes";
import Account from "../pages/Account";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import FoodPage from "../pages/FoodPage";
import { API } from "../api";
import FoodPurchasePage from "../pages/FoodPurchasePage";
import MyOrders from "../components/MyOrders";
import MyPurchase from "../components/MyPurchase";
import MyFoods from "../components/MyFoods";
import UpdateFoodPage from "../pages/UpdateFoodPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoutes>
            <AddFoodPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
      },
      {
        path: "/food/:id",
        element: <FoodPage />,
        loader: ({ params }) => API.get(`/food/${params.id}`),
      },
      {
        path: "/food-purchase/:id",
        element: (
          <PrivateRoutes>
            <FoodPurchasePage />
          </PrivateRoutes>
        ),
        loader: ({ params }) => API.get(`/food/${params.id}`),
      },
      {
        path: "/update-food/:id",
        element: <UpdateFoodPage />,
        loader: ({ params }) => API.get(`/food/${params.id}`),
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () => API.get(`/gallery`),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoutes>
            <Account />
          </PrivateRoutes>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="my-foods" replace />,
          },
          {
            path: "my-foods",
            element: (
              <PrivateRoutes>
                <MyFoods />
              </PrivateRoutes>
            ),
          },
          {
            path: "my-orders",
            element: (
              <PrivateRoutes>
                <MyOrders />,
              </PrivateRoutes>
            ),
          },
          {
            path: "my-purchase",
            element: (
              <PrivateRoutes>
                <MyPurchase />
              </PrivateRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

export default routes;
